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

export const Wrapper = styled.div`
	width: 90%;
	max-width: 600px;

	display: grid;
	grid-template-columns: 1fr;
	gap: 0.75rem;
	margin-bottom: 0.75rem;

	* {
		width: 100% !important;
	}

	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}
`
