import React, { useState, useEffect } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import DebuffField from "../../components/Tools/Adaptation/DebuffField";
import AdaptationField from "../../components/Tools/Adaptation/AdaptationField";
import HyperAdaptationField from "../../components/Tools/Adaptation/HyperAdaptationField";
import { getAtkGain } from "../../components/Tools/Adaptation/getAtkGain";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import { getTranslationMessages } from "../../helpers/messageTranslationsHelpers";
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  return {
    props: {
      messages: await getTranslationMessages(context, "adaptation"),
    },
  };
}

export default function AdaptationCalculator() {
  const t = useTranslations()
  const [debuff, setDebuff] = useState(10);
  const [adaptation, setAdaptation] = useState(0);
  const [hyperAdaptation, setHyperAdaptation] = useState(0);
  const [currentStatGained, setCurrentStatGained] = useState(0);
  const [remainAdaptationDebuff, setRemainAdaptationDebuff] = useState(0);

  useEffect(() => {
    const atkGainData = getAtkGain(debuff, adaptation, hyperAdaptation)
    
    const getAdaptResult = () => {
      setCurrentStatGained(atkGainData.atkGain);
      setRemainAdaptationDebuff(atkGainData.remainAdaptationDebuff);
    };
    getAdaptResult();
  }, [debuff, adaptation, hyperAdaptation]);

  const onDebuffChange = (e) => {
    const { value } = e.target;
    setDebuff(value);
  };

  const onAdaptationChange = (e) => {
    const { value } = e.target;
    let char = value.split("").reverse();
    char = char.toString();
    if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || !value) {
      value > 60 ? setAdaptation(60) : setAdaptation(value);
    }
  };

  const onHyperAdaptationChange = (e) => {
    const { value } = e.target;
    let char = value.split("").reverse();
    char = char.toString();
    if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || !value) {
      setHyperAdaptation(value);
    }
  };

  return (
    <div>
      <Head>
        <title>{t('title')}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Elsword Adaptation Calculator" />
        <meta
          name="keywords"
          content="Elsword, Raybuken, Elsword Adaptation Calculator"
        />
        <meta name="author" content="Raybuken" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <div className="container my-5">
          <div className="jumbotron">
            <SocialMedia />
            <h1 className=" text-center">{t('title')}</h1>
            <hr className="my-3" />
            <form className="my-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                  <DebuffField title={t('debuff')} debuff={onDebuffChange} />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                  <AdaptationField
                    title={t('adaptation')}
                    value={adaptation}
                    adaptation={onAdaptationChange}
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                  <HyperAdaptationField 
                    title={t('hyper-adaptation')} 
                    value={hyperAdaptation}
                    hyperAdaptation={onHyperAdaptationChange} />
                </div>
                <div className="col-12 mt-2">
                  <div className="row">
                    <div className="col-6">
                      <p htmlFor="currentEffectiveness">{t('stat-gained')}</p>
                      <span className="display-4 font-weight-bold">
                        = {currentStatGained || 0}%
                      </span>
                    </div>
                    <div className="col-6">
                      <p htmlFor="currentEffectiveness">{t('remain-adaptation-debuff')}</p>
                      <span className="display-4 font-weight-bold text-danger">
                        = {remainAdaptationDebuff || 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
