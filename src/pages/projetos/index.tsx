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

// #endregion

// #region -Contributors’

// MARK: .
import { useObject } from "@/lib"

// MARK: .
import { Container } from "@/styles/Projetos"

// MARK: Components
import { ProjectCard } from "@/component"

// #endregion

// MARK: -Component
export default function Home() {
	const {
		contributor: {
			name,
			url: { artifacts }
		}
	} = useObject()

	return (
		<Container>
			<Head>
				<title>Артефакты | {name}</title>
			</Head>
			<h1>АРТЕФАКТЫ</h1>
			<h2 className="subtitle">Ознакомтесь с примерами моих артефактов</h2>
			{artifacts.map((artifact: any) => {
				const { name, ...rest } = artifact
				return <ProjectCard key={name} name={name} {...rest} />
			})}
		</Container>
	)
}
