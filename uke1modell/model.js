const model = {
    inputCreatePoll:
    {
        pollInfo:
        {
            pollName: 'Kodetimer uke 1',
            pollDeadline: '17.10.2020',
            editMode: false,
        },
        questionInputs:
            [
            {
                pollQuestion: 'N&aring;r passer det med kodetime?' ,
                newAlternativeInput: '',
                pollAlternatives:
                    [
                        'Mandag 10.00 - 11.00',
                        'Onsdag 10.00 - 11.00',
                        'Torsdag 12.15 - 13.15',
                    ],
                userMayAddAlternatives: true,
            }, {
                pollQuestion: 'Hva skal vi lære oss?',
                newAlternativeInput: '',
                pollAlternatives:
                    [
                        'MVC',
                        'Funksjonelle funksjoner',
                        'Objekter',
                        'Lister med objekter',
                    ],
                userMayAddAlternatives: true,
            }
        ]

    },
    savedPolls:
    [
        {
            poll1:
                {
                    pollInfo:
                    {
                        pollName: 'Kodetimer uke 1',
                        pollDeadline: '17.10.2020',
                    },
                    question1:
                    {
                        pollQuestion: 'N&aring;r passer det med kodetime?',
                        pollAlternatives:
                            [
                                'Mandag 10.00 - 11.00',
                                'Onsdag 10.00 - 11.00',
                                'Torsdag 12.15 - 13.15',
                            ],
                            userMayAddAlternatives: true,
                    },
                    question2:
                    {
                        pollQuestion: 'Hva skal vi lære oss?',
                        pollAlternatives:
                            [
                                'MVC',
                                'Funksjonelle funksjoner',
                                'Objekter',
                                'Lister med objekter',
                            ],
                        userMayAddAlternatives: true,
                    },
                }
        }
    ]

    

};