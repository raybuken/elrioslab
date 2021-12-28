import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import {
  stages,
  stagesKR,
  stagesTenebrous,
} from "../../components/Tools/Reforge/reforgeStages";
import { calcReforge } from "../../components/Tools/Reforge/CalcReforge";
import ReforgeCounts from "../../components/Tools/Reforge/ReforgeCounts";
import { CalcPercentages } from "../../components/Tools/Reforge/CalcPercentages";
import PercentagesField from "../../components/Tools/Reforge/PercentagesField";

import { useRouter } from "next/router";
import { english, spanish } from "../../translations/translations";

import Head from "next/head";

export default function Reforge() {
  const { locale } = useRouter();
  const t = locale === "en" ? english.reforge : spanish.reforge;
  const [armor, setArmor] = useState("Rigomor");
  const [server, setServer] = useState("KR");

  const fromStageSelect = useRef(null);
  const [fromStage, setFromStage] = useState(0);
  const toStageSelect = useRef(null);
  const [toStage, setToStage] = useState(stagesKR.map((el) => el));
  const [attemptPercentage, setAttemptPercentage] = useState(0);
  const [count, setCount] = useState({});

  useEffect(() => {
    setCount(
      calcReforge(
        fromStageSelect.current.value,
        toStageSelect.current.value,
        attemptPercentage,
        armor,
        server
      )
    );
  }, [toStage, attemptPercentage, armor, server]);

  const onFromStageChange = (e) => {
    const { value } = e.target;
    const filterToStage =
      armor === "Tenebrous"
        ? stagesTenebrous.filter((el) => el.stage > value)
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

  const getCounts = () => {
    setCount(
      calcReforge(
        fromStageSelect.current.value,
        toStageSelect.current.value,
        attemptPercentage,
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
        <title>Reforge</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Elsword Reforge Calculator" />
        <meta
          name="keywords"
          content="Elsword, Raybuken, Elsword reforge Calculator"
        />
        <meta name="author" content="Raybuken" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <Navbar />
      <div className="container my-3">
        <div className="jumbotron">
          <SocialMedia />
          <h1 className="text-center">Reforge</h1>
          <hr />
          <div className="my-4">
            <div className=" row justify-content-between mb-3">
              <div className="col-4">
                <label>Armor</label>
                <select
                  name="armor"
                  className="form-control"
                  onChange={(e) => onChangeArmor(e)}
                >
                  <option value="Rigomor">Rigomor</option>
                  <option value="Tenebrous">Tenebrous</option>
                </select>
              </div>
              <div className="col-4">
                {armor === "Rigomor" && (
                  <>
                    <label>Server</label>

                    <select
                      name="server"
                      className="form-control"
                      onChange={(e) => onChangeServer(e)}
                    >
                      {
                        <>
                          <option value="KR">NA/INT/KR/JP/TW</option>
                          <option value="EU">EU</option>
                        </>
                      }
                    </select>
                  </>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <label>{t.from}</label>
                <select
                  className="form-control reforge-field"
                  onChange={onFromStageChange}
                  ref={fromStageSelect}
                >
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
                      ))}
                </select>
              </div>
              <div className="col-md-4">
                <label>{t.to}</label>
                <select
                  className="form-control reforge-field"
                  ref={toStageSelect}
                  onChange={getCounts}
                >
                  {toStage.map((el, i) => (
                    <option key={i} value={el.stage}>
                      {el.stage}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <PercentagesField
                  percentages={CalcPercentages(fromStage + 1, server)}
                  percentage={attemptPercentage}
                  setPercentage={setPercentage}
                />
              </div>
            </div>
            <div>
              <ReforgeCounts result={count} armor={armor} />
            </div>
            <p className="font-italic">{t.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
