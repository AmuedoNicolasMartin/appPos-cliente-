import { cardProducts, Categories, Menu, Products } from "@/types";

//Exportamos el arreglo de objetos menu para usar dinamicamente en un menu.map() (en la ul en este caso.)
export const menu : Menu[] = [
    {
        label:'Inicio',
        icon:'fi fi-rr-home',
        href:'/'
    },
    {
        label:'Menu',
        icon:'fi fi-rr-menu-burger',
        href:'/menu'
    },
    {
        label:'Ordenes',
        icon:'fi fi-rr-ballot',
        href:'/ordenes'
    },
    {
        label:'Historial',
        icon:'fi fi-sr-time-past',
        href:'/historial'
    },
    {
        label:'Facturas',
        icon:'fi fi-rr-file-invoice-dollar',
        href:'/facturas'
    }
]

export const categories : Categories[] = [
    {
        category: 'Hamburguesas'
    },
    {
        category: 'Pizzas'
    },
    {
        category: 'Tacos'
    },
    {
        category: 'Pollos'
    },
    {
        category: 'Ensaladas'
    },
    {
        category: 'Pastas'
    },
    {
        category: 'Lonches'
    },
    {
        category: 'Refrescos'
    },
    {
        category: 'Combos'
    }
]

export const products : Products[] = [
    {
        name: 'Bacon Burger',
        category: 'Hamburguesas',
        image: "https://img.freepik.com/foto-gratis/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso_90220-1063.jpg?t=st=1725575063~exp=1725578663~hmac=c5105a857fc7917648ee78cee3b0c216b8308d4b90fc79b61b7b1ccefa1cb445&w=740",
        discount: 15,
        stock: 100,
        price: 99.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo aliquid impedit officiis? Et harum consequuntur ipsum omnis quos? Ab id animi unde, cum sapiente aperiam impedit dolorem voluptatem hic iure sed, voluptates repudiandae. Maiores natus dicta, ab sint soluta praesentium ut cum explicabo, nobis amet dolores quas placeat iusto similique eos. Dignissimos pariatur sed odio sequi, placeat obcaecati hic quam voluptatum? Omnis reprehenderit tempora fuga repellat hic sequi. Quas aperiam ex expedita libero temporibus delectus porro enim dignissimos corporis explicabo eos rerum consequuntur soluta distinctio placeat, iusto nisi similique sed maxime neque ad assumenda? Nisi, aperiam exercitationem. Aspernatur, ipsa"
    },
    {
        name: 'Taco',
        category: 'Tacos',
        image: "https://img.freepik.com/foto-gratis/tacos-mexicanos-carne-res-salsa-tomate-salsa_2829-14194.jpg?t=st=1725575063~exp=1725578663~hmac=1357128df90efa25c715721c0c96b3fe4581a1f757c918b2e7b15d266f386681&w=826",
        discount: 5,
        stock: 100,
        price: 89.99,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil molestias illo laboriosam eaque harum aspernatur quae quidem amet et placeat. Magni omnis expedita quam assumenda. Recusandae blanditiis minima asperiores quas optio commodi reprehenderit similique numquam praesentium tempora, maxime velit ipsa, sit veritatis dolorum dicta corporis dignissimos explicabo, assumenda facere sed! Ex velit non ducimus, totam modi voluptate, rem temporibus enim corrupti exercitationem dolorum animi tenetur maiores vero maxime saepe aliquid laboriosam rerum debitis porro. Atque tempora quas suscipit dolores eum exercitationem quibusdam optio maiores a molestias fuga at dolorum quia nobis itaque cumque rem odio, expedita quisquam magnam. Quia, debitis!"
    },
    {
        name: 'Pollito',
        category: 'Pollos',
        image: "https://img.freepik.com/foto-gratis/deliciosa-gastronomia-pollo-comida-foodie_1350-56.jpg?t=st=1725575063~exp=1725578663~hmac=1026df2000b3e7145111546f4d8a6052ef048acec9779b2f3e7bb826c9b3108a&w=826",
        discount: 10,
        stock: 100,
        price: 49.99,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, rerum. Reiciendis blanditiis autem quod inventore? Repellendus, a! Vel sunt ratione eum cum aperiam dicta necessitatibus cumque, quidem dolorem iusto. Corrupti, tenetur similique quibusdam perferendis odit eos fugit laudantium odio debitis fuga obcaecati illo officiis est incidunt ut. Numquam facilis necessitatibus placeat commodi, rem fuga totam consequatur odio! Quas debitis officia quaerat at deleniti velit, aspernatur doloremque exercitationem facere architecto, inventore dignissimos asperiores ipsum enim distinctio dolore sit? Reprehenderit odio, a repellendus debitis aperiam quaerat recusandae autem fugit. Nesciunt, similique! Voluptatem illo, mollitia pariatur autem quibusdam provident! Hic voluptatibus repudiandae voluptate."
    },
    {
        name: 'Lonche del chavo',
        category: 'Lonches',
        image: "https://img.freepik.com/foto-gratis/arreglo-delicioso-sandwich-placa_23-2148633458.jpg?t=st=1725575063~exp=1725578663~hmac=7b5ed1a1952fc7c6b176c59f8047305ae758830990bbae9c9a05b2152e019a9b&w=826",
        discount:0,
        stock: 100,
        price: 69.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur molestias modi facere, ducimus aliquid ullam dicta minima accusantium fuga obcaecati quidem sapiente ipsam, vero odio nostrum placeat, dignissimos voluptatibus. Neque maiores consequatur a molestiae optio exercitationem accusantium fugiat iste, adipisci reiciendis veniam quis, odio non. Ipsa esse deserunt autem minima, sit ipsum commodi inventore possimus nisi, consectetur asperiores cumque aspernatur consequuntur debitis ad totam, quibusdam culpa expedita quae maxime nam dolore? Ea nisi alias eum nulla consectetur, laborum fugiat excepturi commodi iusto eligendi nostrum? Iste ratione explicabo ducimus vel optio quis voluptatibus sunt eveniet assumenda dignissimos, nemo, ipsa corrupti"
    },
    {
        name: 'Pizza de pepperoni',
        category: 'Pizzas',
        image: "https://img.freepik.com/foto-gratis/pizza-recien-horneada-mesa-madera-rustica-generada-ia_24640-82163.jpg?t=st=1725578270~exp=1725581870~hmac=4573e2b0a4e4073075f6b9b7625c2c3346014c1857449bd6bcc5c6e08c3ebc4f&w=996",
        discount:0,
        stock: 0,
        price: 109.99,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident laudantium aut minima? Illo nobis est recusandae laboriosam, facilis magnam, maiores sunt dolor laborum possimus id. Alias vel, eum rem praesentium, nulla possimus tempora quia magnam harum voluptas earum soluta? Officia, voluptates? Quis, molestias neque in eligendi id repellat, nesciunt officia, unde nisi ipsum culpa dolor consequuntur illum non modi. Consequatur quae nihil neque odio possimus accusantium cupiditate deserunt eius facere magni quam ipsam qui consectetur voluptates soluta nemo aliquam explicabo inventore veritatis officia maxime quisquam, molestiae cum nobis! Ab illo odit doloremque quaerat laborum, placeat expedita perferendis voluptatum soluta!"
    },
    {
        name: 'Coca Cola 600ml',
        category: 'Refrescos',
        image: "https://img.freepik.com/foto-gratis/fizzy-cola-bebida-macro-disparo_53876-14910.jpg?t=st=1725575063~exp=1725578663~hmac=8956c5b2d9c0c796d53cda3bb809ab8c34887b130a0eb75b63951782104b03ef&w=826",
        discount:15,
        stock: 0,
        price: 29.99,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque ipsum culpa fugiat molestiae provident nemo, natus quos. Voluptatem aut voluptates, reprehenderit adipisci assumenda a impedit ea quasi nisi porro pariatur incidunt debitis inventore consequuntur error nesciunt molestiae amet placeat aperiam! Deserunt praesentium mollitia vitae? Eius iusto dignissimos inventore cupiditate nobis. Debitis, fugiat nulla quo nisi aliquam eos rerum sapiente! Eaque corporis repellat placeat voluptate molestiae corrupti maxime ipsam, rerum quos officiis incidunt quasi, doloribus dolor harum alias tenetur quidem veniam nobis, fugiat dolore! Et suscipit nulla, ipsa libero itaque impedit voluptatibus blanditiis deleniti facere dolorum unde omnis numquam enim"
    }
]

export const cardProduct : cardProducts[] = [
 {
    name: 'Bacon Burger',
    price: 99.99,
    image: "https://img.freepik.com/foto-gratis/sabrosa-hamburguesa-aislada-sobre-fondo-blanco-comida-rapida-hamburguesa-fresca-carne-queso_90220-1063.jpg?t=st=1725575063~exp=1725578663~hmac=c5105a857fc7917648ee78cee3b0c216b8308d4b90fc79b61b7b1ccefa1cb445&w=740",
    quantity: 2
 },
 {
    name: 'Pollito',
    price: 49.99,
    image: "https://img.freepik.com/foto-gratis/deliciosa-gastronomia-pollo-comida-foodie_1350-56.jpg?t=st=1725575063~exp=1725578663~hmac=1026df2000b3e7145111546f4d8a6052ef048acec9779b2f3e7bb826c9b3108a&w=826",
    quantity: 2
 },
 {
    name: 'Coca Cola 600ml',
    price:29.99,
    image:"https://img.freepik.com/foto-gratis/fizzy-cola-bebida-macro-disparo_53876-14910.jpg?t=st=1725575063~exp=1725578663~hmac=8956c5b2d9c0c796d53cda3bb809ab8c34887b130a0eb75b63951782104b03ef&w=826",
    quantity: 3
 }
]