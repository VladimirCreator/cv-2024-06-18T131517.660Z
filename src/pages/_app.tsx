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

// #endregion

// #region -Contributors’

// MARK: .
import GlobalStyle from "@/styles/global"

// MARK: Components
import { Footer, Header, Splash } from "@/component"

// #endregion

// MARK: -Component
export default function MyApp(props: any) {
	const { Component, pageProps } = props

	return (
		<>
			<Header />
			<Component {...pageProps.stdin} />
			<Footer />
			<Splash />

			<GlobalStyle />
		</>
	)
}
