import {NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Thadeu'},
        {id: 2, name: 'Karina'},
        {id: 3, name: 'Meggy'},
    ]

    return response.json(users);
}

//Serveless => Subir um ambiente isolado para a resposta e depois é encerrado