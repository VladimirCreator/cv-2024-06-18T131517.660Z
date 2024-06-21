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

// MARK: React
import { useState } from "react"

// #endregion

// #region -Contributors’

// MARK: .
import { Container, ContentContainer, Hamburger, Navigation } from "./styles"

// MARK: Components
import { NavLink } from "../navigation-link"

// #endregion

// MARK: -Component
export function Header() {
	const [menuOpen, setMenu] = useState(false)

	return (
		<Container>
			<ContentContainer>
				<a href="./" className="logo">
					<img src="/cv-2024-06-18T131517.660Z/logo.png" alt="Logo" />
				</a>
				<Navigation className={menuOpen ? "visible" : ""}>
					<NavLink onClick={() => setMenu(false)} href="./" label="Главная" />

					<NavLink
						label="Артефакты"
						onClick={() => setMenu(false)}
						href="./projetos"
					/>

					<NavLink
						onClick={() => setMenu(false)}
						href="./sobre"
						label="Обо мне"
					/>
				</Navigation>
				<Hamburger
					className={menuOpen ? "close" : ""}
					onClick={() => setMenu(!menuOpen)}
				>
					<span className="bar1" />
					<span className="bar2" />
					<span className="bar3" />
				</Hamburger>
			</ContentContainer>
		</Container>
	)
}
