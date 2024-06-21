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

// MARK: Next
import Head from "next/head"
// MARK: Next: Router
import { useRouter } from "next/router"

// MARK: MUI: Material
import { Tooltip } from "@mui/material"

// #endregion

// #region -Contributors’

// MARK: .
import { useObject } from "@/lib"

// MARK: .
import { Page } from "@/styles/global"
import { Hero, Projects } from "@/styles/Home"

// MARK: Components
import { CommunicationForm, ProjectCard } from "@/component"

// #endregion

// MARK: -Component
export default function Home() {
	const {
		contributor: { name, role, synopsis, url, socials },
		dependencies,
		"key-0": { "key-0": key }
	} = useObject()
	const router = useRouter()

	return (
		<Page>
			<Head>
				<title>Главная | {name}</title>
			</Head>
			<Hero>
				<div className="info">
					<h2>{key ?? role}</h2>
					<h1>{name}</h1>
					<p>{synopsis}</p>
					<div>
						<button
							style={{ display: "none" }}
							type="button"
							onClick={() => {
								const contato = document.querySelector("#contato")

								contato.scrollIntoView({ behavior: "smooth" })
							}}
							className="filled"
						>
							Entrar em contato
							<span className="background" />
						</button>
						<button
							type="button"
							onClick={() => {
								const projetos = document.querySelector("#projetos")

								projetos.scrollIntoView({ behavior: "smooth" })
							}}
							className="outlined"
						>
							Мои Артефакты
							<span className="background" />
						</button>
						<button
							type="button"
							onClick={() => router.push("/sobre")}
							className="link"
						>
							Обо мне
							<span className="background" />
						</button>
					</div>
				</div>
				<div className="avatar">
					<img alt={name} src={url.picture} />
					<div>
						{socials.map(item => {
							const { name, url } = item
							const lookupKey = name.toLowerCase()

							return (
								<Tooltip title={name} key={name}>
									<a rel="noreferrer" target="_blank" href={url}>
										<img
											alt={`Logo of ${name}`}
											src={dependencies[lookupKey]}
										/>
									</a>
								</Tooltip>
							)
						})}
					</div>
				</div>
			</Hero>
			<span id="projetos" style={{ height: "5rem", marginTop: "-3rem" }} />
			<Projects>
				<h1>Мои Артефакты</h1>
				{url.artifacts.slice(0, 3).map((artifact, index) => {
					const { name, ...rest } = artifact
					return (
						<ProjectCard
							key={name}
							name={name}
							{...rest}
							isLast={index === 2}
						/>
					)
				})}
			</Projects>
			<span id="contato" style={{ height: "7rem", marginTop: "-5rem" }} />
			<CommunicationForm />
		</Page>
	)
}
