import React from 'react';
import { styled } from 'twin.macro';
import { Testimony } from '.';

type GradientProp = {
  gr1?: string;
  gr2?: string;
  gr3?: string;
};

export const GradientText = styled.span<GradientProp>`
  background: ${({ gr1, gr2, gr3 }) =>
    `linear-gradient(to right top, #${gr1}, #${gr2}, #${gr3})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
`;
export const dataTesti = [
  {
    nama: 'Veronika Xaveria',
    namaPanggilan: 'Veronika',
    position: 'Champion of Business-IT Case',
    message: (
      <span>
        “COMPFEST membantu saya mengasah skill
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          Product Management, Brand Management, dan Design Thinking.{' '}
        </GradientText>
        Pengetahuan tersebut membantu saya mendapatkan
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          kesempatan magang di perusahaan multinasional di industri teknologi
          dan FMCG.
        </GradientText>
        ”
      </span>
    ),
    src: '/images/testimony/veronica.png',
  },
  {
    nama: 'Ilham Nugroho',
    namaPanggilan: 'Ilham',
    position: 'Champion of Indie Game Ignite',
    message: (
      <span>
        “COMPFEST membantu saya
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          mendapat dukungan dan kerjasama dengan pihak profesional{' '}
        </GradientText>
        untuk membantu proyek game yang sedang saya kerjakan, hal tersebut
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          berkat channel-channel yg didapatkan{' '}
        </GradientText>
        sewaktu mengikuti COMPFEST.”
      </span>
    ),
    src: '/images/testimony/ilham.png',
  },
  {
    nama: 'Giri Kuncoro',
    namaPanggilan: 'Giri',
    position: 'Software Developer at GOJEK',
    message: (
      <span>
        “COMPFEST adalah acara yang keren,
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          dapat menjembatani akademik dan Industri.
        </GradientText>
        ”
      </span>
    ),
    src: '/images/testimony/giri.png',
  },
  {
    nama: 'Sofian Hadiwijaya',
    namaPanggilan: 'Sofian',
    position: 'Co-Founder of Warung Pintar',
    message: (
      <span>
        “Melalui acara ini, saya menemukan berbagai masalah yang tidak saya
        sadari sebelumnya dan
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          menemukan berbagai ide solusi{' '}
        </GradientText>
        masalah tersebut dari para
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          peserta - peserta yang sangat antusias.
        </GradientText>
        ”
      </span>
    ),
    src: '/images/testimony/sofian.png',
  },
  {
    nama: 'Dira Shafa A',
    namaPanggilan: 'Dira',
    position: 'STEI Student at Institut Teknologi Bandung',
    message: (
      <span>
        “UX Academy COMPFEST memberiku
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          banyak pelatihan dan lingkungan yang suportif{' '}
        </GradientText>
        untuk meningkatkan pengetahuan UX-ku. Seneng banget karena bisa bertemu
        dengan
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          mentor-mentor hebat dari Tokopedia, GOJEK, dan Giza Lab.
        </GradientText>
        ”
      </span>
    ),
    src: '/images/testimony/dira.png',
  },
  {
    nama: 'William Chang',
    namaPanggilan: 'William',
    position: 'Computer Science Student at Binus University',
    message: (
      <span>
        “Software Engineering Academy COMPFEST merupakan tempat belajar Software
        Engineering dengan cara yang seru. Aku mendapat banyak
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          network dengan berbagai mentor dari perusahaan besar{' '}
        </GradientText>
        serta ilmu dari
        <GradientText
          gr1={'ed1c7d'}
          gr2={'cd33d5'}
          gr3={'5824fe'}
          tw="inline font-bold"
        >
          {' '}
          sesi mentoring, seminar dan workshop.
        </GradientText>
        ”
      </span>
    ),
    src: '/images/testimony/william.png',
  },
] as Testimony[];
