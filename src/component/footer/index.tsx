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

// #region -Contributors’

// MARK: .
import { useObject } from "@/lib"

// MARK: .
import { Container } from "./styles"

// #endregion

// MARK: -Component
export function Footer() {
	const {
		contributor: { name, role, socials },
		dependencies
	} = useObject()

	return (
		<Container>
			<div>
				<div className="logo">
					<img alt="Logo" src="/cv-2024-06-18T131517.660Z/logo.png" />
					<p>
						Сделано
						<br />
						{name}
						<br />
						{role}
					</p>
				</div>
				<div className="social-media">
					{socials.map(social => {
						const { name, url } = social
						const lookup = name.toLowerCase()

						return (
							<a key={name} target="_blank" rel="noreferrer" href={url}>
								<img
									alt={`Logo of ${name}`}
									width={24}
									height={24}
									src={dependencies[lookup]}
								/>
							</a>
						)
					})}
				</div>
			</div>
		</Container>
	)
}
