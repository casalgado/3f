The objects in this file contain the information to be displayed in the website. 
Each of these files corresponds to one of the main sections of the page,
and it is passed on to a MainSection component as a prop.

The structure of the objects is as follows:

{
    landing_img: String,
    landing_txt: String,
    intro_txt: String,
    collections: [
        {
            name: String,
            products: [
                {
                    id: Integer,
                    img: String,
                    price: Integer,
                    descripcion: String
                } ...
            ]
        }
    ]
}
