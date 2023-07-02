import Home from '../Pages/Home'
import MyInformation from '../Pages/MyInformation'
import ContactWithMe from '../Pages/ContactWithMe'
import Resume from '../Pages/Resume'
import NotFoundPage404 from '../Pages/404'


export const route=[
    {path:"home",component:<Home/>},
    {path:"info",component:<MyInformation/>},
    {path:"contact",component:<ContactWithMe/>},
    {path:"resume",component:<Resume/>},
    {path:"*",component:<NotFoundPage404/>},

]