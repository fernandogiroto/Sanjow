export default function (req, res) {

    if (req.method === 'GET') {
        const id = req.query.id;
        res.status(200).json(
            [
                {
                    id: 1,
                    name: 'Fernando Giroto',
                    email: 'giroto.luis@gmail.com',
                    avatar: 'images/fernandogiroto.png',
                    programmingLanguages: [
                        'PHP', 'Javascript', 'CSS', 'C#'
                    ]
                },
                {
                    id: 2,
                    name: 'Steve Jobs',
                    email: 'jobs@apple.com',
                    avatar: 'images/jobs.png',
                    programmingLanguages: [
                        'Marketing', 'SCRUM', 'UX/UI Design'
                    ]
                },
                {
                    id: 3,
                    name: 'Steve Wozniak',
                    email: 'wox@apple.com',
                    avatar: 'images/stevewozniak.png',
                    programmingLanguages: [
                        'Marketing', 'SCRUM', 'UX/UI Design'
                    ]
                },
                {
                    id: 4,
                    name: 'Bill Gates',
                    email: 'gates@microsoft.com',
                    avatar: 'images/billgates.png',
                    programmingLanguages: [
                        'Marketing', 'SCRUM', 'UX/UI Design'
                    ]
                },
                {
                    id: 5,
                    name: 'Why the Lucky Stiff',
                    email: 'none@ruby.com',
                    avatar: 'images/whytheluckystiff.jpeg',
                    programmingLanguages: [
                        'Marketing', 'SCRUM', 'UX/UI Design'
                    ]
                },
                {
                    id: 6,
                    name: 'Elon Musk',
                    email: 'elon@twitter.com',
                    avatar: 'images/elonmusk.jpeg',
                    programmingLanguages: [
                        'Marketing', 'SCRUM', 'UX/UI Design'
                    ]
                },
                {
                    id: 7,
                    name: 'Rasmus Lerdorf',
                    email: 'rasmus@php.net',
                    avatar: 'images/rasmus.jpeg',
                    programmingLanguages: [
                        'PHP','MySql'
                    ]
                },
                {
                    id: 8,
                    name: 'Yukihiro Matsumoto',
                    email: 'rasmus@ruby.com',
                    avatar: 'images/matsumoto.jpeg',
                    programmingLanguages: [
                        'Ruby','Python','Ruby on Rails'
                    ]
                },
                {
                    id: 9,
                    name: 'Larry Page',
                    email: 'larry@google.com',
                    avatar: 'images/larrypage.jpeg',
                    programmingLanguages: [
                        'Go', 'PHP', 'Javascript'
                    ]
                },
                {
                    id: 10,
                    name: 'Jeff Bezos',
                    email: 'jeff@amazon.com',
                    avatar: 'images/jeffbezos.jpeg',
                    programmingLanguages: [
                        'Go', 'PHP', 'Javascript'
                    ]
                },
                
            ]
        )
    } else {
        res.status(405).send();
    }
}