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

import styled from "styled-components"

export const Container = styled.div`
	width: 90%;
	max-width: 1120px;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 5rem;
	padding: 2rem 0;

	> h1 {
		font-weight: 500;
		color: white;
		font-size: 2em;
	}

	> h2 {
		font-size: 1rem;
		color: #b1b1b1;
		font-weight: 300;
		margin-bottom: 2rem;
		text-align: center;
	}

	div + div {
		margin-top: 1.5rem;
	}
`
