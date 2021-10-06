import React from 'react';
import tw, { css } from 'twin.macro';
import { InView } from 'react-intersection-observer';
import StatCard from './StatCard';
import { imgSizeType, textSizeType } from './StatCard/StatCard';

export interface RecordSectionProps {
  imgSize: imgSizeType;
  textSize: textSizeType;
}
const RecordSection: React.FC<RecordSectionProps> = (props) => {
  return (
    <>
      <div tw="container mx-auto mt-24 md:mt-48 hidden md:flex items-center justify-center">
        <img
          src="/images/stats/rekor-desktop.svg"
          alt="rekor compfest selama 12 tahun"
        />
      </div>

      <div tw="container mx-auto mt-24 md:mt-48 flex md:hidden items-center justify-center">
        <img
          src="/images/stats/rekor-mobile.svg"
          alt="rekor compfest selama 12 tahun"
        />
      </div>

      <InView as="div" threshold={0.25}>
        {({ inView, ref }) => {
          return (
            <div ref={ref}>
              <div
                tw="hidden md:flex flex-col space-y-4 
                lg:space-y-8 mt-10 items-center justify-center"
                css={css`
                  min-width: 0px;
                `}
              >
                <div
                  tw="flex flex-row items-center space-x-4 lg:space-x-8"
                  css={css`
                    height: 220px;
                  `}
                >
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/pengunjung.svg',
                      imgAlt: 'pengunjung',
                    }}
                    data={{
                      figures: 8500,
                      title: 'PENGUNJUNG',
                      suffix: '+',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/pendaftar-job-fair.svg',
                      imgAlt: 'Pendaftar Job Fair',
                    }}
                    data={{
                      figures: 3800,
                      suffix: '+',
                      title: 'PENDAFTAR JOB FAIR',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/page-view.svg',
                      imgAlt: 'Page Views',
                    }}
                    data={{
                      figures: '1.9',
                      suffix: '+ Juta',
                      title: 'PAGE VIEWS',
                    }}
                    isStatic
                  />
                </div>
                <div
                  tw="flex flex-row items-center space-x-4 lg:space-x-8"
                  css={css`
                    height: 220px;
                  `}
                >
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/peserta-acad-compe.svg',
                      imgAlt: 'Peserta Academy & Competition',
                    }}
                    data={{
                      figures: 3300,
                      suffix: '+',
                      title: 'PESERTA ACADEMY & COMPETITION',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/pembicara.svg',
                      imgAlt: 'Pembicara',
                    }}
                    data={{
                      figures: 250,
                      startFigures: 100,
                      suffix: '+',
                      title: 'PEMBICARA',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="desktop"
                    img={{
                      imgSrc: '/images/stats/total-follower.svg',
                      imgAlt: 'Total Followers Sosial Media',
                    }}
                    data={{
                      figures: 3300,
                      suffix: '+',
                      title: 'TOTAL FOLLOWERS SOSIAL MEDIA',
                    }}
                    inView={inView}
                  />
                </div>
              </div>

              <div
                tw="block md:hidden mt-9 mb-9 mx-auto"
                css={css`
                  max-width: 296px;
                `}
              >
                <div
                  tw="grid grid-cols-2 gap-4"
                  css={css`
                    grid-template-rows: masonry;
                  `}
                >
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 119px;
                    `}
                    img={{
                      imgSrc: '/images/stats/pengunjung.svg',
                      imgAlt: 'pengunjung',
                    }}
                    data={{
                      figures: 8500,
                      title: 'PENGUNJUNG',
                      suffix: '+',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 134px;
                    `}
                    img={{
                      imgSrc: '/images/stats/pendaftar-job-fair.svg',
                      imgAlt: 'Pendaftar Job Fair',
                    }}
                    data={{
                      figures: 3800,
                      suffix: '+',
                      title: 'PENDAFTAR JOB FAIR',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 117px;
                      margin-top: -1rem;
                    `}
                    img={{
                      imgSrc: '/images/stats/page-view.svg',
                      imgAlt: 'Page Views',
                    }}
                    data={{
                      figures: '1.9',
                      suffix: '+ Juta',
                      title: 'PAGE VIEWS',
                    }}
                    isStatic
                  />
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 147px;
                    `}
                    img={{
                      imgSrc: '/images/stats/peserta-acad-compe.svg',
                      imgAlt: 'Peserta Academy & Competition',
                    }}
                    data={{
                      figures: 3300,
                      suffix: '+',
                      title: 'PESERTA ACADEMY & COMPETITION',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 117px;
                      margin-top: -3rem;
                    `}
                    img={{
                      imgSrc: '/images/stats/pembicara.svg',
                      imgAlt: 'Pembicara',
                    }}
                    data={{
                      figures: 250,
                      startFigures: 100,
                      suffix: '+',
                      title: 'PEMBICARA',
                    }}
                    inView={inView}
                  />
                  <StatCard
                    {...props}
                    mode="mobile"
                    cardStyle={css`
                      height: 147px;
                    `}
                    img={{
                      imgSrc: '/images/stats/total-follower.svg',
                      imgAlt: 'Total Followers Sosial Media',
                    }}
                    data={{
                      figures: 3300,
                      suffix: '+',
                      title: 'TOTAL FOLLOWERS SOSIAL MEDIA',
                    }}
                    inView={inView}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </InView>
    </>
  );
};

export default RecordSection;
