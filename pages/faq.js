import React from "react";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import StatCalcFAQ from "@/components/Faq/StatCalculator/StatCalcFAQ";
import ReforgeFAQ from "@/components/Faq/Reforge/ReforgeFAQ";
import AdaptationFAQ from "@/components/Faq/Adaptation/AdaptationFAQ";
import IgnoreDefenseFAQ from "@/components/Faq/IgnoreDefense/IgnoreDefenseFAQ";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  const faq = (await import(`../translations/${context.locale}/faq.json`)).default
  const common = (await import(`../translations/${context.locale}/common.json`)).default

  return {
      props: {
          messages: {
              ...faq, ...common
          }
      }
  }
}


export default function Faq() {
  const t = useTranslations();

  return (
    <div>
      <Head>
        <title>Elrios Lab - {t('title')}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Elsword Calculators" />
        <meta name="keywords" content="Elsword, Raybuken, Elsword Calculator" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <div className="py-4">
          <div className="jumbotron container">
            <SocialMedia />
            <h1 className="my-3">{t('title')}</h1>
            <hr className="my-3" />
            <ul className=" accordion p-1 id='faq-accordion'">
              <div className="accordion-item">
                <StatCalcFAQ />
              </div>
              <div className="accordion-item">
                <ReforgeFAQ />
              </div>
              <div className="accordion-item">
                <AdaptationFAQ />
              </div>
              <div className="accordion-item">
                <IgnoreDefenseFAQ />
              </div>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
