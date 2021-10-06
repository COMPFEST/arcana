import tw, { css } from 'twin.macro';
import Dropzone from 'react-dropzone';
import React from 'react';

export type UploadProps = {
  uploaded: boolean;
  fileName?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onDrop: (acc: any, rej: any) => void;
  hapusFile: () => void;
  allowedExtensions: string[];
};

const Upload: React.FC<UploadProps> = ({
  uploaded,
  fileName,
  onDrop,
  hapusFile,
  allowedExtensions = ['.zip', '.png', '.jpg'],
}) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Dropzone multiple={false} onDrop={onDrop} accept={allowedExtensions}>
        {({ getRootProps, getInputProps }) => (
          <div
            tw="rounded-lg max-w-lg w-full flex items-center justify-center px-12 py-10 border-2 relative"
            css={[
              uploaded ? tw`border-green-500 bg-green-100` : tw`border-dashed`,
            ]}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              {!uploaded ? (
                <>
                  <div
                    className="upload-file"
                    tw="flex justify-center cursor-pointer"
                  >
                    <svg
                      width="49"
                      height="34"
                      viewBox="0 0 49 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.7142 34V24.2857H34L24.2857 12.1428L14.5714 24.2857H21.8571V34H26.7142Z"
                        fill="#0266D3"
                      />
                      <path
                        d="M12.1429 34H17V29.1429H12.1429C8.126 29.1429 4.85714 25.874 4.85714 21.8571C4.85714 18.4474 7.769 15.164 11.3487 14.535L12.7597 14.2873L13.226 12.9321C14.9333 7.95114 19.1736 4.85714 24.2857 4.85714C30.9813 4.85714 36.4286 10.3044 36.4286 17V19.4286H38.8571C41.5359 19.4286 43.7143 21.607 43.7143 24.2857C43.7143 26.9644 41.5359 29.1429 38.8571 29.1429H31.5714V34H38.8571C44.2146 34 48.5714 29.6431 48.5714 24.2857C48.5714 19.72 45.4021 15.878 41.1497 14.8434C40.0884 6.48429 32.9314 0 24.2857 0C17.5926 0 11.7786 3.91243 9.12414 10.0786C3.90757 11.6377 0 16.5629 0 21.8571C0 28.5527 5.44729 34 12.1429 34Z"
                        fill="#0266D3"
                      />
                    </svg>
                  </div>
                  <div tw="text-center">
                    <span css={tw`text-xs md:text-lg block mt-4`}>
                      Drag atau{' '}
                      <span
                        css={css`
                          color: #0266d3;
                        `}
                      >
                        upload
                      </span>{' '}
                      submisi kamu di sini
                    </span>
                    <span tw="text-xs md:text-sm">
                      Upload dalam format {allowedExtensions.join(', ')}
                    </span>
                  </div>
                </>
              ) : (
                <div tw="flex flex-col items-center justify-center">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 0C7.6262 0 0 7.6262 0 17C0 26.3738 7.6262 34 17 34C26.3738 34 34 26.3738 34 17C34 7.6262 26.3738 0 17 0ZM17 30.6C9.5013 30.6 3.4 24.4987 3.4 17C3.4 9.5013 9.5013 3.4 17 3.4C24.4987 3.4 30.6 9.5013 30.6 17C30.6 24.4987 24.4987 30.6 17 30.6Z"
                      fill="#0CA788"
                    />
                    <path
                      d="M13.5982 19.6979L9.68989 15.7964L7.28949 18.2036L13.6016 24.5021L25.0018 13.1019L22.598 10.6981L13.5982 19.6979Z"
                      fill="#0CA788"
                    />
                  </svg>
                  <h1 tw="text-green-600 font-bold mt-4">
                    File telah terupload!
                  </h1>
                  <div tw="flex flex-row space-x-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      tw="mt-1"
                    >
                      <path
                        d="M10.7808 4.65079C10.7543 4.59337 10.7212 4.53867 10.6746 4.49208L7.42464 1.24208C7.37806 1.1955 7.32335 1.16246 7.26594 1.13592C7.24969 1.12833 7.23235 1.124 7.21502 1.11804C7.16952 1.10287 7.12294 1.09312 7.07473 1.09042C7.06335 1.08933 7.05306 1.08337 7.04169 1.08337H3.25002C2.65256 1.08337 2.16669 1.56925 2.16669 2.16671V10.8334C2.16669 11.4308 2.65256 11.9167 3.25002 11.9167H9.75002C10.3475 11.9167 10.8334 11.4308 10.8334 10.8334V4.87504C10.8334 4.86367 10.8274 4.85337 10.8263 4.84146C10.8236 4.79325 10.8144 4.74667 10.7987 4.70117C10.7933 4.68383 10.7884 4.66704 10.7808 4.65079ZM8.9841 4.33337H7.58335V2.93262L8.9841 4.33337ZM3.25002 10.8334V2.16671H6.50002V4.87504C6.50002 5.17458 6.74215 5.41671 7.04169 5.41671H9.75002L9.7511 10.8334H3.25002Z"
                        fill="#999999"
                      />
                      <path
                        d="M4.33331 6.50004H8.66665V7.58337H4.33331V6.50004ZM4.33331 8.66671H8.66665V9.75004H4.33331V8.66671ZM4.33331 4.33337H5.41665V5.41671H4.33331V4.33337Z"
                        fill="#999999"
                      />
                    </svg>
                    <a
                      tw="text-gray-400 break-all"
                      href={`${
                        process.env.NEXT_PUBLIC_ARCANUM_BASE_URL ||
                        'https://arcanum.compfest.id'
                      }/download?file=${fileName}`}
                      download
                    >
                      {fileName?.split('_')[fileName?.split('_').length - 1] ??
                        ''}
                    </a>
                  </div>
                  <div
                    tw="absolute top-4 right-4 cursor-pointer"
                    onClick={(e) => {
                      hapusFile();
                      e.stopPropagation();
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 7C5.447 7 5 7 5 7V20C5 21.104 5.896 22 7 22H17C18.104 22 19 21.104 19 20V7C19 7 18.553 7 18 7H6ZM16.618 4L15 2H9L7.382 4H3V6H8H16H21V4H16.618Z"
                        fill="#999999"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default Upload;
