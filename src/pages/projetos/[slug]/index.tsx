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

// MARK: Next: Head
import Head from "next/head"
// MARK: Next: Router
import { useRouter } from "next/router"

// MARK: MUI: Material - Tooltip
import Tooltip from "@mui/material/Tooltip"

// #endregion

// #region -Contributors’

// MARK: .
import { useObject } from "@/lib"

// MARK: .
import { Page } from "@/styles/global"
import { Container, ToolsContainer } from "@/styles/Projeto"

// #endregion

// MARK: -Data
export function getStaticPaths() {
	const {
		contributor: {
			url: { artifacts }
		}
	} = useObject()
	const paths = artifacts.map(artifact => {
		return {
			params: {
				slug: artifact.name.toLowerCase().replace(" ", "")
			}
		}
	})

	return {
		paths,
		fallback: true
	}
}
export function getStaticProps(context: any) {
	return {
		props: { id: context.params.slug }
	}
}

// MARK: -Component
export default function Projeto(props: any) {
	const router = useRouter()

	const {
		contributor: {
			name,
			url: { artifacts }
		},
		dependencies
	} = useObject()
	const artifact = artifacts.find(artifact =>
		artifact.name.toLowerCase().replace(" ", "").includes(router.query.slug)
	)

	// useEffect(() => {
	// 	if (!project) router.push("/projetos")
	// }, [])

	return (
		<Page>
			<Head>
				<title>
					{artifact.name} | {name}
				</title>
			</Head>
			<Container>
				<div className="back">
					<button type="button" onClick={() => router.back()}>
						<img
							alt="Get Back."
							src="/cv-2024-06-18T131517.660Z/left-arrow.png"
						/>
					</button>
				</div>
				<a
					className="title"
					target="_blank"
					rel="noreferrer"
					href={artifact.url.web}
				>
					{artifact.name}
					<img
						src="/cv-2024-06-18T131517.660Z/up-right-arrow.png"
						alt="Seta apontando para a direito e para cimaa"
					/>
				</a>
				{Array.isArray(artifact.description) ? (
					artifact.description.map(string => (
						<p className="desc" children={string} />
					))
				) : (
					<p className="desc">{artifact.description ?? artifact.synopsis}</p>
				)}
				<h1>Используемые технологии</h1>
				<ToolsContainer>
					{artifact.dependencies.map(item => {
						return (
							<Tooltip title={item} key={item}>
								<div>
									<img
										alt={item}
										src={dependencies[item.toLowerCase().replace(" ", "")]}
									/>
								</div>
							</Tooltip>
						)
					})}
				</ToolsContainer>
				{artifact.url.image && (
					<img
						src={artifact.url.image}
						alt={`Banner of ${artifact.url.image}`}
						className="banner"
					/>
				)}
			</Container>
		</Page>
	)
}
