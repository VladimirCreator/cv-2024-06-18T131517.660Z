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

import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Exo 2', Exo, sans-serif;
    position: relative;
  }

  html, body, #__next {
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111;
  }

  a {
    color: #b1b1b1;
    text-decoration: none;
  }

  .grayscale {
    filter: grayscale(1);
  }

  .Mui-valid::after {
    height: 22px;
    width: 101%;
    content: "";
    background-color: #111;
  }
`

export const Page = styled.div`
	width: 100%;
	margin-top: 5rem;
	padding: 2rem 0;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-weight: 500;
		color: white;
	}

	.mail-call {
		margin-bottom: 2.75rem;
		color: #b1b1b1;
		font-size: 0.85rem;
		opacity: 0.8;

		span {
			font-weight: 500;
			color: #f6f6f6;
			text-decoration: underline;
			transition: filter 0.4s;
			cursor: pointer;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}
`
