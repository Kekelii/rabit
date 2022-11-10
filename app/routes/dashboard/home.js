/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';

let data = [{
        label: 'A',
        catlogue: 'category',
        subcatlogue: [{ label: 'AA', revenue: 5, catlogue: 'AA_Catlogue' }, { label: 'AA', revenue: 5, catlogue: 'AA_Catlogue' }],
    },
    {
        label: 'B',
        catlogue: 'category',
        subcatlogue: [{ label: 'AA', revenue: 15, catlogue: 'AA_Catlogue' }, { label: 'AA', revenue: 15, catlogue: 'AA_Catlogue' }],
    },
    {
        label: 'C',
        catlogue: 'category',
        subcatlogue: [{ label: 'AA', revenue: 10, catlogue: 'AA_Catlogue' }, { label: 'AA', revenue: 10, catlogue: 'AA_Catlogue' }],
    },
    {
        label: 'D',
        catlogue: 'category',
        subcatlogue: [{ label: 'AA', revenue: 30, catlogue: 'AA_Catlogue' }, { label: 'AA', revenue: 30, catlogue: 'AA_Catlogue' }],
    },
    {
        label: 'E',
        catlogue: 'category',
        subcatlogue: [{ label: 'AA', revenue: 10, catlogue: 'AA_Catlogue' }, { label: 'AA', revenue: 70, catlogue: 'AA_Catlogue' }],
    },
];
export default class DashboardHomeRoute extends Route {
    model() {
        return data;
    }
}