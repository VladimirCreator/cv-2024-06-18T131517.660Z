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
	width: 100%;
	height: 100%;
	z-index: 999;

	position: fixed;
	top: 0;
	left: 0;

	background-color: #111;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: opacity 1s;

	&,
	* {
		font-size: 2rem;
		color: #b1b1b1;
		margin: 0;

		@media (min-width: 768px) {
			font-size: 3.5rem;
		}
	}

	&.d-none {
		display: none;
	}

	span.zoom {
		-webkit-animation: zoom 0.6s forwards;
		animation: zoom 0.6s forwards;
	}

	span.rotate {
		-webkit-animation: rotate 0.6s forwards;
		animation: rotate 0.6s forwards;
	}

	@keyframes rotate {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(360deg);
		}
	}

	@keyframes zoom {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(4);
		}
	}
`
