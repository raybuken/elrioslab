import React, { useState, useEffect } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import DebuffField from "../../components/Tools/Adaptation/DebuffField";
import AdaptationField from "../../components/Tools/Adaptation/AdaptationField";
import { getAtkGain } from "../../components/Tools/Adaptation/getAtkGain";

import { useRouter } from "next/router";
import { english, spanish } from "../../translations/translations";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
export default function AdaptationCalculator() {
  const { locale } = useRouter();
  const t = locale === "en" ? english.adaptation : spanish.adaptation;
  const [debuff, setDebuff] = useState(10);
  const [adaptation, setAdaptation] = useState(0);
  const [currentStatGained, setCurrentDebuff] = useState(0);

  useEffect(() => {
    const getAdaptResult = () =>
      setCurrentDebuff(getAtkGain(debuff, adaptation));
    getAdaptResult();
  }, [debuff, adaptation]);

  const onDebuffChange = (e) => {
    const { value } = e.target;
    setDebuff(value);
  };

  const onAdaptationChange = (e) => {
    const { value } = e.target;
    let char = value.split("").reverse();
    char = char.toString();
    if ((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || !value) {
      value > 55 ? setAdaptation(55) : setAdaptation(value);
    }
  };

  return (
    <div>
      <Head>
        <title>{t.title}</title>
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
            <h1 className=" text-center">{t.title}</h1>
            <hr className="my-3" />
            <form className="my-4">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                  <DebuffField title={t.debuff} debuff={onDebuffChange} />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                  <AdaptationField
                    title={t.adaptation}
                    value={adaptation}
                    adaptation={onAdaptationChange}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                  <p htmlFor="currentEffectiveness">{t["stat-gained"]}</p>
                  <span className="display-4 font-weight-bold">
                    = {currentStatGained}%
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
