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
import { useRef, useEffect } from "react"

// MARK: Next: Head
import Head from "next/head"
// MARK: MUI: Material
import Tooltip from "@mui/material/Tooltip"
// MARK: Typed
import Typed from "typed.js"

// #endregion

// #region -Contributors’

// MARK: .
import { useObject } from "@/lib"

// MARK: .
import { Avatar, Container, ToolsContainer, Work } from "@/styles/Sobre"

// #endregion

export default function Sobre() {
	// MARK: .
	const {
		contributor: {
			name,
			role,
			description,
			dependencies,
			url: { photograph },
			socials,
			enterprise
		},
		dependencies: dep
	} = useObject()

	// MARK: .
	const el = useRef(null!)

	// MARK: .
	const effect = () => {
		const strings =
			dependencies
				.filter(dependency => dependency.typed)
				.map(dependency => dependency.name) ?? []
		const typed = new Typed(el.current, {
			strings,
			typeSpeed: 80,
			backSpeed: 90,
			backDelay: 120,
			loop: true,
			showCursor: false,
			startDelay: 1600
		})

		return typed.destroy
	}

	useEffect(effect, [])
	return (
		<Container>
			<Head>
				{/* feat(i18n): . */}
				<title>Обо мне | {name}</title>
			</Head>
			<Avatar>
				<img alt={`Image of ${name}`} className="avatar" src={photograph} />
				<div>
					<h1>{name}</h1>
					<h2>{role}</h2>
					<span ref={el} className="typed" />
					<div className="social-media">
						{socials.map(social => {
							const { name, url } = social
							return (
								<a rel="noreferrer" target="_blank" href={url}>
									<img alt={`Logo of ${name}`} src={dep[name.toLowerCase()]} />
								</a>
							)
						})}
					</div>
				</div>
			</Avatar>
			<p className="desc">{description}</p>
			{enterprise && (
				<Work hidden={enterprise === null}>
					<h3>Профессиональный опыт</h3>
					{enterprise.map(item => {
						const { job, date, url, company } = item
						return (
							<div key={date}>
								<h4>{job}</h4>
								<a href={url} target="_blank" rel="noreferrer">
									{company}
								</a>
								<p>{date}</p>
							</div>
						)
					})}
				</Work>
			)}
			<h3>Мой основной стэк</h3>
			<ToolsContainer>
				{dependencies.map(dependency => {
					let name: string
					if (typeof dependency === "object") {
						name = dependency.name
					} else {
						name = dependency
					}

					return (
						<Tooltip key={name} title={name}>
							<div>
								<img alt={name} src={dep[name.toLocaleLowerCase()]} />
							</div>
						</Tooltip>
					)
				})}
			</ToolsContainer>
		</Container>
	)
}
