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

// MARK: .

// #endregion

// #region -Contributors’

// MARK: .
import { Card, Container } from "./styles"

// #endregion

type Props = any // [ ](refactor): .

// MARK: -Component
export function ProjectCard(props: Readonly<Props>) {
	const { name, synopsis, url, isLast = false } = props
	const href = name.toLowerCase().replace(" ", "")

	return (
		<Container>
			<Card href={`./projetos/${href}`}>
				<img
					className="banner"
					alt={`Image of ${name} artifact.`}
					src={url.image}
				/>
				<div>
					<h1 className="title">{name}</h1>
					<p>{synopsis}</p>
					<a href={`./projetos/${href}`} className="saiba-mais">
						подробнее
					</a>
					{!isLast && <span className="background" />}
				</div>
			</Card>
			{isLast && (
				<span className="list-call">
					<a href="./projetos">посмотреть полный список</a>
				</span>
			)}
		</Container>
	)
}
