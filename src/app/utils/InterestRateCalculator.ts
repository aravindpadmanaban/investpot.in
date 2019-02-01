import { InvestSearchMain } from '../InvestSearchMain';
import { INTEREST_RATES } from '../db-temp/interest-data';
import { INVESTMENT_TYPES } from '../db-temp/investment-types';
import { INVESTMENT_DETAIL } from '../db-temp/investment-detail';

export class InterestRateCalculator extends InvestSearchMain {

    interestRateDetails: object;
    disp(): void {
        console.log(' Displaying content from interestrate cal' + this.amount);
    }

    getInterestByInterestType(interestType: string): object {
        const interestPercent = this.getInterestPercentage(interestType, this.years);
        const principle = this.amount;
        const years = this.years;
        const compounded = 1;

        switch (interestType) {
            case 'bank': {
                const totalAmount = this.calculateCompoundInterest(principle, interestPercent, compounded, years);
                this.interestRateDetails = {
                    'totalAmount': totalAmount,
                    'interestPercent': interestPercent,
                    'compounded': compounded
                };
                break;
            }
            case 'ppf': {
                const totalAmount = this.calculateCompoundInterest(principle, interestPercent, compounded, years);
                this.interestRateDetails = {
                    'totalAmount': totalAmount,
                    'interestPercent': interestPercent,
                    'compounded': compounded
                };
                break;
            }
            case 'potd': {
                const totalAmount = this.calculateCompoundInterest(principle, interestPercent, compounded, years);
                this.interestRateDetails = {
                    'totalAmount': totalAmount,
                    'interestPercent': interestPercent,
                    'compounded': compounded
                };
                break;
            }
            case 'nsc': {
                const totalAmount = this.calculateCompoundInterest(principle, interestPercent, compounded, years);
                this.interestRateDetails = {
                    'totalAmount': totalAmount,
                    'interestPercent': interestPercent,
                    'compounded': compounded
                };
                break;
            }
            case 'ssay': {
                const totalAmount = this.calculateCompoundInterest(principle, interestPercent, compounded, years);
                this.interestRateDetails = {
                    'totalAmount': totalAmount,
                    'interestPercent': interestPercent,
                    'compounded': compounded
                };
                break;
            }
            default: {
                console.log('Invalid Interest type');
                break;
            }
        }
        return this.interestRateDetails;
    }

    getInterestPercentage(interestType: string, years: number): number {
        const interestPercentage = INTEREST_RATES.find(interestRate => interestRate.type === interestType);
        return interestPercentage.interest[years];
    }

    calculateCompoundInterest(principle: number, interestPercent: number, compounded: number, years: number): number {
        return (principle * Math.pow((1 + (interestPercent / (compounded * 100))), (compounded * years)));
    }
}
