/* Copyright 2024 Vladimir Leonidovich
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// #region -Dependencies

// MARK: Next: Document
import Document, {
	DocumentInitialProps,
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript
} from "next/document"

import { ServerStyleSheet } from "styled-components"

// #endregion

// #region -Contributors’

// MARK: .

// #endregion

export default class MyDocument extends Document {
	public static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const { renderPage: originalRenderPage } = ctx

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					/* @ts-expect-error I hate React. */
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}

	public render() {
		return (
			<Html lang="ru">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						sizes="any"
						href="/cv-2024-06-18T131517.660Z/logo.png"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>

					<meta
						name="msapplication-TileImage"
						content="/cv-2024-06-18T131517.660Z/logo.png"
					/>

					<meta property="og:site_name" content="Arthur Sena | Desenvolvedor" />
					<meta property="og:title" content="Arthur Sena | Desenvolvedor" />
					<meta
						property="og:description"
						content="Me chamo Arthur Sena e sou desenvolvedor de software, clique e conheça meu trabalho!"
					/>

					<meta property="og:image" content="/share.png" />

					<meta property="og:type" content="website" />
					<meta property="og:image:type" content="image/png" />

					<meta property="og:image:width" content="200" />
					<meta property="og:image:height" content="200" />

					<meta property="og:url" content="https://www.arthursena.com.br" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
