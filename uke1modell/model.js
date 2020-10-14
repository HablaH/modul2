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
            },

    },
    savedPolls:
    [
        {
            pollInfo:
                {
                    pollName: 'Kodetimer uke 1',
                    pollDeadline: '17.10.2020',
                },
            questions:
                [
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
                ]
        },
    ]
     
    

};