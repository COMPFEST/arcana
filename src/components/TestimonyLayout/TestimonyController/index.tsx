import React from 'react';
import { SerializedStyles } from '@emotion/react';
import tw from 'twin.macro';
import { Testimony, TestimonyProps } from '../TestimonyLayout';
import { GradientText } from '../util';

export type TestimonyControllerImgBorderType = 'full' | 'none' | 'xl';
export type TestimonyControllerImgContainerType = 'sm' | 'base' | 'lg';

export interface TestimonyControllerProps extends TestimonyProps {
  selector?: React.Dispatch<number>;
  selected?: number;
  imgContainer?: TestimonyControllerImgContainerType;
  imgBorder: TestimonyControllerImgBorderType;
  onSelected?: SerializedStyles;
  imgHeight?: string;
  imgWidth?: string;
}

const imgContainerMap = {
  base: tw`w-20 h-20`,
  sm: tw`w-16 h-16`,
  lg: tw`w-24 h-24`,
};

const imgBorderMap = {
  full: tw`rounded-full`,
  none: tw`rounded-none`,
  xl: tw`rounded-xl`,
};
const TestimonyController: React.FC<TestimonyControllerProps> = ({
  testiList,
  selector,
  selected = 0,
  onSelected,
  imgBorder = 'full',
  imgContainer = 'base',
  imgHeight = '100%',
  imgWidth = '100%',
}) => {
  return (
    <div tw="container mx-auto flex flex-col space-y-10 md:space-y-0 items-center justify-center md:px-4 px-16 mt-0 md:mt-16 mb-24 md:mb-48">
      {/* Desktop Version */}
      <div tw="hidden md:flex flex-row space-x-8">
        {testiList.map((val, index) => (
          <div
            key={index}
            css={[
              index === selected && onSelected,
              tw`relative`,
              imgContainerMap[imgContainer],
            ]}
          >
            <img
              css={[imgBorderMap[imgBorder], tw`bg-white cursor-pointer`]}
              src={val.src}
              alt="image testimoni"
              style={{
                width: imgWidth,
                height: imgHeight,
              }}
              onClick={() => {
                selector && selector(index);
              }}
            />
            <h1 tw="text-center pt-2">{val.namaPanggilan}</h1>
          </div>
        ))}
      </div>

      {/* Mobile Version */}
      <div tw="flex md:hidden flex-row space-x-8 pb-6">
        {testiList.map((val, index) => {
          if (index < 3) {
            return (
              <div
                key={index}
                css={[
                  index === selected && onSelected,
                  tw`relative`,
                  imgContainerMap[imgContainer],
                ]}
              >
                <img
                  css={[imgBorderMap[imgBorder], tw`bg-white cursor-pointer`]}
                  src={val.src}
                  alt="image testimoni"
                  style={{
                    width: imgWidth,
                    height: imgHeight,
                  }}
                  onClick={() => {
                    selector && selector(index);
                  }}
                />
                <h1 tw="text-center pt-2">{val.namaPanggilan}</h1>
              </div>
            );
          }
        })}
      </div>
      <div tw="flex md:hidden flex-row space-x-8">
        {testiList.map((val, index) => {
          if (index > 2) {
            return (
              <div
                key={index}
                css={[
                  index === selected && onSelected,
                  tw`relative`,
                  imgContainerMap[imgContainer],
                ]}
              >
                <img
                  css={[imgBorderMap[imgBorder], tw`bg-white cursor-pointer`]}
                  src={val.src}
                  alt="image testimoni"
                  style={{
                    width: imgWidth,
                    height: imgHeight,
                  }}
                  onClick={() => {
                    selector && selector(index);
                  }}
                />
                <h1 tw="text-center pt-2">{val.namaPanggilan}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default TestimonyController;

const dataTesti = [
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
