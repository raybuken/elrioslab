import React from "react";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { useTranslations } from "next-intl";

export async function getStaticProps(context) {
  const about = (await import(`../translations/${context.locale}/about.json`)).default
  const common = (await import(`../translations/${context.locale}/common.json`)).default

  return {
      props: {
          messages: {
              ...about, ...common
          }
      }
  }
}

export default function About() {
  const t = useTranslations()

  return (
    <div>
      <Head>
        <title>Elrios Lab - {t('about')}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Elsword Calculators" />
        <meta name="keywords" content="Elsword, Raybuken, Elsword Calculator" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <div className="container jumbotron my-5">
          <SocialMedia />
          <h1 className="display-4 my-4">{t('about')}</h1>
          <hr className="my-3" />
          <div className="mx-5">
            <p className="fs-4 text-justify">{t.p1}</p>
            <p className="fs-4 text-justify">{t.p2}</p>
            <p>
              {t('channel')}:{" "}
              <a className="text-info" href="https://youtube.com/Raybuken">
                Raybuken
              </a>
            </p>

            <div className="text-center">
              <Image
                src={"https://res.cloudinary.com/elrioslab/image/upload/v1616513205/files/perfil.png"}
                width="1000"
                height="700"
                alt="Raybuken"
                priority={true}
                className="img-fluid w-100"
              />
              <div>
                <h2>{t('creator')}</h2>
                <p> Raybuken (NA) </p>
              </div>
              <div>
                <h3>{t('logo-design')}</h3>
                <p>Yami</p>
              </div>
              <div>
                <h3>{t('reference')}</h3>
                <p>
                  <a href="https://ashal.eu">ashal.eu</a>
                </p>
                <p>
                  <a href="https://elwiki.net">elwiki.net</a>
                </p>
              </div>
              <div>
                <h3>{t('gratitude')}</h3>
                <p>{t('guildmate')}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
