import Head from 'next/head';
import { Fragment } from 'react';

export default ({ children, title = 'Aloha' }) => (
  <Fragment>
    <Head>
      <title>{ title }</title>
    </Head>

    <main>
      <h1>We proudly present the favorite &#9917; colors</h1>
      { children }
    </main>

    <footer>
      <span>with</span>
      <em className="lovely">&#10084;</em>
      <span>from</span>
      <svg className="logo" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574.27 162.24">
        <defs>
          <style>
            { `.cls-1{fill:#fff}` }
          </style>
        </defs>
        <path className="cls-1"
              d="M10.57 86.93c.32-.1.48-.39.7-.61q9.48-9.46 19-19c.55-.56.82-.65 1.43 0q18.23 18.29 36.5 36.53 8.41 8.41 16.8 16.86c.51.52.75.48 1.24 0Q106 100.81 125.93 81c.51-.5.5-.75 0-1.26q-9.62-9.57-19.18-19.21c-.5-.51-.74-.53-1.25 0Q89.09 76.94 72.66 93.38c-.6.59-.88.58-1.44 0-1.8-1.89-3.66-3.72-5.53-5.54-.43-.42-.51-.64 0-1.13q20-19.94 39.92-39.91c.42-.42.64-.45 1.07 0q16.5 16.55 33 33.05c.5.49.27.68-.08 1q-26.75 26.73-53.46 53.48c-.54.54-.77.41-1.23 0q-15.75-15.8-31.53-31.55-10.87-10.93-21.76-21.87c-.51-.51-.77-.6-1.32 0-1.82 1.9-3.69 3.76-5.58 5.59-.48.46-.49.71 0 1.19q11.44 11.37 22.85 22.81l19.14 19.14c4.11 4.11 8.14 8.3 12.35 12.31a9.41 9.41 0 0 0 13.37-.28l54.38-54.38a9.55 9.55 0 0 0 0-14C135.53 62.1 124.25 50.9 113.07 39.6a10 10 0 0 0-14.44 0C85.43 53 72.09 66.22 58.83 79.53c-.57.57-.85.64-1.44 0-1.81-1.91-3.69-3.76-5.58-5.6-.39-.39-.5-.6-.05-1.06q20.33-20.24 40.59-40.56c7.42-7.46 19.86-7 26.79-.19 7.7 7.6 15.32 15.29 23 23l11.73 11.72a19.07 19.07 0 0 1 .11 27q-27.51 27.58-55.11 55.11a19.12 19.12 0 0 1-26.16.36c-.41-.37-.8-.75-1.18-1.13l-34.91-34.96L11 87.56l-.44-.46z"
              transform="translate(-10.57 -13.55)"/>
        <path className="cls-1"
              d="M227.45 96a12.33 12.33 0 0 0-.49 2.49 17.71 17.71 0 0 1-4.84 8.93l-68 68c-.42.42-.63.43-1.06 0q-9.57-9.63-19.18-19.21c-.59-.58-.26-.8.12-1.18l53-53c2.35-2.35 4.66-4.74 7-7.06.58-.58.5-.87 0-1.4l-53.17-53.19c-.64-.64-.63-1 0-1.56 1.84-1.76 3.63-3.58 5.41-5.4.44-.45.7-.55 1.21 0q30.15 30.16 60.35 60.29c.65.65.28.91-.14 1.33q-30 30-59.93 59.89c-.63.63-.64.95 0 1.56 1.78 1.7 3.52 3.45 5.22 5.23.52.53.79.56 1.34 0q15.13-15.19 30.3-30.34l30.32-30.31a9.15 9.15 0 0 0 2.91-6.91 9.69 9.69 0 0 0-2.89-6.91l-61.04-61.07a9.12 9.12 0 0 0-4.34-2.65c-3.54-.82-6.77-.24-9.45 2.4-2.1 2.08-4.19 4.16-6.25 6.27-.48.5-.75.46-1.21 0-1.88-1.93-3.8-3.82-5.7-5.73-.23-.23-.58-.42-.16-.82 2.76-2.65 5.29-5.56 8.25-8a17.39 17.39 0 0 1 9.27-3.92 1.27 1.27 0 0 0 .31-.15h4.82c.51.44 1.17.29 1.76.42a18.87 18.87 0 0 1 9.28 5.21q11.1 11.13 22.23 22.24Q202.38 61.1 222 80.8a17.45 17.45 0 0 1 5 9.4 13.08 13.08 0 0 0 .47 2.57z"
              transform="translate(-10.57 -13.55)"/>
        <path className="cls-1"
              d="M121.26 139.89a9 9 0 0 0 .87-.64l51.2-51.2c.77-.77.77-.77 1.55 0 1.82 1.82 3.63 3.66 5.47 5.46.43.42.52.63 0 1.12-13.56 13.52-27.07 27.1-40.65 40.6-5 5-11.17 6.27-18 4.93a3.69 3.69 0 0 1-.44-.27zM112.82 80.4l-.56.59-17.74 17.74c-2.82 2.82-5.65 5.62-8.44 8.46-.48.5-.73.45-1.18 0-1.88-1.92-3.79-3.83-5.71-5.71-.44-.43-.4-.65 0-1.07q13.18-13.12 26.31-26.3c.37-.37.59-.48 1 0 1.94 2 3.92 3.94 5.88 5.9.16.08.29.23.44.39zM333.72 103.51c0 26.09-8.19 33.77-30.74 33.77-6.68 0-23.06-1.51-23.06-1.51V46.68h13.61v28.61s8.69-3.78 15.75-3.78c17.14 0 24.44 8.49 24.44 32zm-14 0c0-14.24-3.66-19.78-12.1-19.78a51.68 51.68 0 0 0-14.11 2.52v38.31s6.93.5 9.45.5c14.04 0 16.78-6.17 16.78-21.55zM341.78 47.69h13.74v14.49h-13.74zm0 25.2h13.74v63h-13.74zM383 84.61v27.72c0 9.45.37 12.73 6.93 12.73 3.52 0 10.33-.38 10.33-.38l.63 11s-8.44 1.64-12.85 1.64c-14.24 0-18.65-5.29-18.65-23.43V84.61h-8.07V72.89h8.07V54.62H383v18.27h17.39v11.72zM402.89 147c0-6.43 3.15-10.34 9.58-15.25-2.65-1.77-4.16-5.29-4.16-9.2 0-2.9 4.54-10.08 4.54-10.08-4.67-2.77-9.08-7.56-9.08-18.9 0-15.88 10.71-21.93 25.2-21.93a68.07 68.07 0 0 1 12.86 1.64l19.53-.5v11.08l-10.46-.63a16.37 16.37 0 0 1 3.4 10.33c0 17.14-8.94 21.8-25.7 21.8a38.41 38.41 0 0 1-5.55-.51s-1.76 4.29-1.76 5.93c0 4 1.38 4.78 13.61 4.91 19.91.13 26.08 4.28 26.08 18.77 0 14.87-12.22 20.67-29.11 20.67-19.02 0-28.98-3.78-28.98-18.13zm18.53-10.21c-3.53 2.9-5.05 5-5.05 8.95 0 5.79 4.16 8.19 15.63 8.19 10.21 0 15.25-2.52 15.25-8.7 0-6.8-3.28-7.56-13.49-7.69-3.9-.01-12.34-.76-12.34-.76zm19.27-43.22c0-7.56-3.27-11.22-11.72-11.22-8.06 0-11.59 3.66-11.59 11.22s3.53 11.21 11.59 11.21c8.45-.01 11.72-3.54 11.72-11.22zM466.39 72.89H480v7.56s10.71-6.93 21.42-8.94v13.73a111.53 111.53 0 0 0-21.29 6.68v44h-13.74zM506.21 47.69h13.73v14.49h-13.73zm0 25.2h13.73v63h-13.73zM530.91 72.89h13.6v3.91s8.7-5.29 16.26-5.29c16.38 0 24.07 9.32 24.07 32.25 0 26-8.82 33.52-28.23 33.52a83.63 83.63 0 0 1-12-1.13V163h-13.7zm13.73 14.37v37.17a82 82 0 0 0 11.09 1c11.72 0 15.12-6.18 15.12-21.68 0-14.74-4.66-20-12.47-20-6.68-.02-13.74 3.51-13.74 3.51z"
              transform="translate(-10.57 -13.55)"/>
      </svg>
    </footer>
  </Fragment>
)
