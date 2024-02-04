import React, { useState, useRef, useEffect } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { stages, stagesKR, stagesTenebrous, stagesTenebrousKR } from "../../components/Tools/Reforge/reforgeStages";
import { calcReforge } from "../../components/Tools/Reforge/CalcReforge";
import ReforgeCounts from "../../components/Tools/Reforge/ReforgeCounts";
import { CalcPercentages } from "../../components/Tools/Reforge/CalcPercentages";
import PercentagesField from "../../components/Tools/Reforge/PercentagesField";
import ServersField from "../../components/Tools/Reforge/ServersField";

import { useRouter } from "next/router";
import { english, spanish } from "../../translations/translations";

import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ReforgeFeeField from "../../components/Tools/Reforge/ReforgeFeeField";

export default function Reforge() {
  const { locale } = useRouter();
  const t = locale === "en" ? english.reforge : spanish.reforge;
  const [armor, setArmor] = useState("Tenebrous");
  const [server, setServer] = useState("KR");

  const fromStageSelect = useRef(null);
  const [fromStage, setFromStage] = useState(0);
  const toStageSelect = useRef(null);
  const [toStage, setToStage] = useState(stagesTenebrousKR.map((el) => el));
  const [attemptPercentage, setAttemptPercentage] = useState(0);
  const [durability, setDurability] = useState(100);
  const [feeAmount, setFeeAmount] = useState(0)
  const [count, setCount] = useState({});

  useEffect(() => {
    setCount(
      calcReforge(
        fromStageSelect.current.value,
        toStageSelect.current.value,
        attemptPercentage,
        durability,
        feeAmount,
        armor,
        server
      )
    );
  }, [toStage, attemptPercentage, durability, armor, server, feeAmount]);

  const onFromStageChange = (e) => {
    const { value } = e.target;
    const filterToStage =
      armor === "Tenebrous"
        ? server === "KR" 
          ? stagesTenebrousKR.filter((el) => el.stage > value)
          : stagesTenebrous.filter((el) => el.stage > value)
        : server === "KR"
          ? stagesKR.filter((el) => el.stage > value)
          : stages.filter((el) => el.stage > value);

    setFromStage(Number(fromStageSelect.current.value));
    setToStage(filterToStage);
    setAttemptPercentage(0);
  };

  const setPercentage = (e) => {
    const { value } = e.target;
    setAttemptPercentage(Number(value));
  };

  const onChangeDurability = (e) => {
    const {value} = e.target;
    setDurability(Number(value))
  }

  const updateFeeAmount = e => {
    const {value} = e.target

    setFeeAmount(Number(value))
  }

  const getCounts = () => {
    setCount(
      calcReforge(
        fromStageSelect.current.value,
        toStageSelect.current.value,
        attemptPercentage,
        durability,
        feeAmount,
        armor,
        server
      )
    );
  };

  const onChangeArmor = (e) => {
    const { value } = e.target;
    setArmor(value);
  };

  const onChangeServer = (e) => {
    const { value } = e.target;
    setServer(value);
  };

  return (
    <div>
      <Head>
        <title>{t.reforge}</title>
        <meta name="description" content="Elsword Reforge Calculator" />
        <meta
          name="keywords"
          content="Elsword, Raybuken, Elsword reforge Calculator"
        />

      </Head>

      <Layout>
        <div className="container my-3">
          <div className="jumbotron">
            <SocialMedia />
            <h1 className="text-center">{t.reforge}</h1>
            <hr />
            <div className="my-4">
              <div className=" row justify-content-between mb-3">
                <div className="col-4">
                  <label>{t.armor}</label>
                  <select
                    name="armor"
                    className="form-control form-select select-field"
                    onChange={(e) => onChangeArmor(e)}
                  >
                    <option value="Rigomor">Rigomor</option>
                    <option value="Tenebrous">Tenebrous</option>
                  </select>
                </div>
                <div className="col-4">
                  {/* <ServersField onChange={onChangeServer} servers={[{value: 'KR', content: 'KR'},{value: 'Others', content: 'Other servers'}]}/> */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mt-2">
                  <label>{t.from}</label>
                  <select className="form-control form-select reforge-field" onChange={onFromStageChange} ref={fromStageSelect}>
                    {armor === "Tenebrous"
                      ? stagesTenebrous.map((el, i) => (
                          <option key={i} value={el.stage - 1}>
                            {el.stage - 1}
                          </option>
                        ))
                      : stagesKR.map((el, i) => (
                          <option key={i} value={el.stage - 1}>
                            {el.stage - 1}
                          </option>
                        ))
                    }
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2">
                  <label>{t.to}</label>
                  <select className=" reforge-field form-select form-control" ref={toStageSelect} onChange={getCounts}>
                    {toStage.map((el, i) => (
                      <option key={i} value={el.stage}>
                        {el.stage}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2">
                  <PercentagesField
                    percentages={CalcPercentages(fromStage + 1, armor, server)}
                    percentage={attemptPercentage}
                    setPercentage={setPercentage}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2">
                  <label>{t.durability}</label>
                  <input className="reforge-field form-control" type='number' min={0} max={100} defaultValue={durability} onChange={(e) => onChangeDurability(e)}/>
                </div>
                <ReforgeFeeField updateFeeAmount={updateFeeAmount}/>
              </div>
              <div>
                <ReforgeCounts result={count} armor={armor} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
