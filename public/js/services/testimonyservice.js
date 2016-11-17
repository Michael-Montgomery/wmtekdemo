var app = angular.module('testimony.svc', []);

app.service('testimonyFuncs', function() {
    this.reviews = [
        {
            testimony: '"I truly value you and WMTek as a partner and I am so grateful that you are helping us. You all ' +
            'are a true blessing. You guys are rockstars!" ',
            author: '- Michael Davis, Marketing Campaigns Director, NAMB'
        },
        {
            testimony: 'You and your team have served the father well. Its been a real priviledge working with you. We' +
                'are getting reave reviews from all who see the site and user are giving, going, and praying as a result',
            author: '- Keith Baum, SEND USA'

        },
        {
            testimony: 'Sitestacker was a huge win for Wycliffe. Our site became so much easier to use and our online' +
            'giving skyrocketed.',
            author: '-Doug Hennum, CIO, Wycliffe USA'
        }
    ];
    this.counter = 0;
    this.returnNextReview = function() {
        this.counter++;
        if(this.counter === this.reviews.length) {
            this.counter = 0;
        }
        return this.reviews[this.counter];
    }
});