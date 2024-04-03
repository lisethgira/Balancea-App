import { Container } from '../../styles/common';
import MoneyImg from '../../assets/Landing/image-currency.jpg';
import { H2, H4, H5, Para } from '../../styles/typography';

import styled from 'styled-components';

export const ArticleWrapper = styled.div`
	padding: 10rem 0 6rem 0;
	h2 {
		padding: 1rem 0 2rem 0;
	}
`;
export const ArticleGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
		text-align: center;
	}
`;
export const ArticleCard = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	h4 {
		padding: 1rem 0;
	}
	border-radius: 1rem;
	overflow: hidden;
`;
export const ArticleCardContent = styled.div`
	padding: 2rem 3rem;
`;




const Articles = () => {
	return (
		<div>
			<Container>
				<ArticleWrapper>
					<H2>Latest Articles</H2>
					<ArticleGrid>
						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Author Name</H5>
								<H4>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
									in!
								</H4>
								<Para>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quibusdam ut tempora laborum, facere non est harum quasi
									nostrum temporibus. Quae?
								</Para>
							</ArticleCardContent>
						</ArticleCard>
						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Author Name</H5>
								<H4>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
									in!
								</H4>
								<Para>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quibusdam ut tempora laborum, facere non est harum quasi
									nostrum temporibus. Quae?
								</Para>
							</ArticleCardContent>
						</ArticleCard>
						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Author Name</H5>
								<H4>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
									in!
								</H4>
								<Para>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quibusdam ut tempora laborum, facere non est harum quasi
									nostrum temporibus. Quae?
								</Para>
							</ArticleCardContent>
						</ArticleCard>

						<ArticleCard>
							<img src={MoneyImg} alt='' />
							<ArticleCardContent>
								<H5>Author Name</H5>
								<H4>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
									in!
								</H4>
								<Para>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Quibusdam ut tempora laborum, facere non est harum quasi
									nostrum temporibus. Quae?
								</Para>
							</ArticleCardContent>
						</ArticleCard>
					</ArticleGrid>{' '}
				</ArticleWrapper>
			</Container>
		</div>
	);
};

export default Articles;
