import { Container } from '../../styles/common';
import { H2, H3, Para } from '../../styles/typography';
import BankingIcon from '../../assets/Landing/icon-online.svg';
import BudgetingIcomn from '../../assets/Landing/icon-budgeting.svg';
import Onboarding from '../../assets/Landing/icon-onboarding.svg';
import Api from '../../assets/Landing/icon-api.svg';

import styled from 'styled-components';

export const InfoWrapper = styled.div`
	width: 100%;
	padding: 10rem 0 6rem 0;
	background: var(--VeryLightGray);
`;
export const InfoHeader = styled.div`
	p {
		max-width: 70rem;
		padding: 1.5rem 0;
	}
	@media (max-width: 480px) {
		text-align: center;
	}
`;
export const InfoGrid = styled.div`
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
export const InfoCard = styled.div`
	padding-top: 5rem;
	img {
		max-width: 5rem;
	}
	h3 {
		padding: 2rem 0;
	}
`;


const Info = () => {
	return (
		<div>
			<InfoWrapper>
				<Container>
					<InfoHeader>
						<H2>Why choose easybank?</H2>
						<Para>
							{' '}
							We leverage Open Banking to turn your bank account into your
							financial hub. Control your finances like never before.
						</Para>
					</InfoHeader>
					<InfoGrid>
						<InfoCard>
							<img src={BankingIcon} alt='' />
							<H3>Online Banking</H3>
							<Para>
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={BudgetingIcomn} alt='' />
							<H3> Simple Budgeting</H3>
							<Para>
								See exactly where your money goes each month. Receive
								notifications when you’re close to hitting your limits.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={Onboarding} alt='' />
							<H3> Fast Onboarding</H3>
							<Para>
								We don’t do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={Api} alt='' />
							<H3> Open API</H3>
							<Para>
								Manage your savings, investments, pension, and much more from
								one account. Tracking your money has never been easier.
							</Para>
						</InfoCard>
					</InfoGrid>
				</Container>
			</InfoWrapper>
		</div>
	);
};

export default Info;
