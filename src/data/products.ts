import type { Product } from "@/interfaces/Product";

export const products: Product[] = [
    {
        id: 1,
        name: 'Modern Bed Frame',
        type: 'Bed Frames',
        price: 200,
        image: 'https://img.freepik.com/free-photo/3d-render-bedroom_1048-8372.jpg?t=st=1727492706~exp=1727496306~hmac=faeaf13cafabef2419279d3c1dabf8acef5d351056e5a5a93b3aeeaaa5900da3&w=1060',
        inStock: 10,
        quantity: 1,
        description: 'This sleek, modern bed frame features clean lines and a minimalist design, perfect for contemporary bedrooms. Crafted from durable materials, it provides excellent support for a restful night’s sleep.'
    },
    {
        id: 2,
        name: 'Classic Sofa',
        type: 'Sofas',
        price: 450,
        image: 'https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?t=st=1727492655~exp=1727496255~hmac=742b5aede364e942d658537c46f50c1e813214323f97e3185f1324ee1eac4c5d&w=1060',
        inStock: 8,
        quantity: 1,
        description: 'A timeless piece, this classic sofa brings comfort and style to your living space. Upholstered in premium fabric, it’s designed for relaxing with family or hosting guests.'
    },
    {
        id: 3,
        name: 'Wooden Bookcase',
        type: 'Bookcases',
        price: 150,
        image: 'https://img.freepik.com/free-photo/wooden-plant-shelf-with-mixed-plants_53876-134344.jpg?t=st=1727492786~exp=1727496386~hmac=ce21c50c431e5d92359b919344c10e19ab2c416e7e52e1be7c9bf709999a16e2&w=996',
        inStock: 12,
        quantity: 1,
        description: 'This sturdy wooden bookcase offers a rustic charm with its natural finish. Ideal for displaying books, plants, and décor, it fits seamlessly into a variety of interior styles.'
    },
    {
        id: 4,
        name: 'Study Desk',
        type: 'Table&desk',
        price: 300,
        image: 'https://img.freepik.com/free-photo/empty-classroom-desk-with-books-pencils_9975-23915.jpg?t=st=1727492832~exp=1727496432~hmac=cc1b5f0ae24850910147ca76f1518ca7a06a834baed1f763552e1255d3af6d4b&w=1060',
        inStock: 5,
        quantity: 1,
        description: 'A spacious and functional study desk, perfect for home offices or student spaces. With ample surface area and sleek design, it helps you stay organized and focused.'
    },
    {
        id: 5,
        name: 'Dining Chair',
        type: 'Chairs,stools and Benches',
        price: 75,
        image: 'https://img.freepik.com/free-photo/luxury-dining-room-authentic-interior-design_53876-129853.jpg?t=st=1727492872~exp=1727496472~hmac=b6b4fc72bc6149992ddf55b29acb0f3501b7b56a5f69b2b1e2d0af2053b0b74f&w=996',
        inStock: 20,
        quantity: 1,
        description: 'This stylish dining chair offers both comfort and elegance. Its cushioned seat and sturdy design make it perfect for family meals and entertaining guests.'
    },
    {
        id: 6,
        name: 'Bench Seat',
        type: 'Chairs,stools and Benches',
        price: 90,
        image: 'https://img.freepik.com/free-photo/park-bench_1308-4863.jpg?t=st=1727492906~exp=1727496506~hmac=4707a4a3a2e99a5774a2b31eeeee3ef71f9e18a2f38dd4cdbc14122beef260e6&w=996',
        inStock: 7,
        quantity: 1,
        description: 'A versatile bench seat that works great both indoors and outdoors. With its minimalist design and durable construction, it provides extra seating in any space.'
    },
    {
        id: 7,
        name: 'Adjustable Office Chair',
        type: 'Chairs,stools and Benches',
        price: 120,
        image: 'https://img.freepik.com/free-photo/ergonomic-office-chair-featuring-adjustable-features-within-welllit-workspace_157027-2864.jpg?t=st=1727492943~exp=1727496543~hmac=b74527f08ad0931309f3859d611d2ad0426b118594603de19f814640871a1790&w=1060',
        inStock: 15,
        quantity: 1,
        description: 'Designed for comfort, this adjustable office chair offers ergonomic support for long hours at your desk. It features customizable height and recline settings to fit your workspace needs.'
    },
    {
        id: 8,
        name: 'Elegant Bed Frame',
        type: 'Bed Frames',
        price: 250,
        image: 'https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-452.jpg?t=st=1727492976~exp=1727496576~hmac=5c484f37dcb971ef978633690701f77f4cd1f30f2664a3715d4e38557765b0ce&w=1060',
        inStock: 5,
        quantity: 1,
        description: 'This elegant bed frame combines classic design with a touch of modernity. Its high-quality materials ensure durability while providing a stylish centerpiece for your bedroom.'
    },
    {
        id: 9,
        name: 'Leather Sofa',
        type: 'Sofas',
        price: 600,
        image: 'https://img.freepik.com/free-photo/modern-fashionable-red-leather-couch-with-cushions-cropped-christmas-tree-brick-wall-loft-design_132075-11381.jpg?t=st=1727493008~exp=1727496608~hmac=bc3209ab0f14fdb6bcbaa06bbbc694e940bab10e68b009827e4f905bee7ec143&w=996',
        inStock: 3,
        quantity: 1,
        description: 'A luxurious leather sofa that adds a bold statement to any living room. Its rich leather upholstery and plush cushions provide both comfort and sophistication.'
    },
    {
        id: 10,
        name: 'Rustic Bookcase',
        type: 'Bookcases',
        price: 180,
        image: 'https://img.freepik.com/free-photo/home-interior-design-arrangement_23-2148986615.jpg?t=st=1727493229~exp=1727496829~hmac=8b52390923273f6fdb0bf7ea6041a10fc2577fe2a743b3cf33b0c886429f0357&w=996',
        inStock: 9,
        quantity: 1,
        description: 'This rustic bookcase features a vintage-inspired design with plenty of storage for your books and décor. Its sturdy build and warm finish make it a cozy addition to any home.'
    },
    {
        id: 11,
        name: 'Office Desk',
        type: 'Table&desk',
        price: 350,
        image: 'https://img.freepik.com/free-photo/business-desk-concept-with-laptop_23-2149073032.jpg?t=st=1727493257~exp=1727496857~hmac=86c54efccd4112eeff3e691f1028e7956be7ccee4e84548e79d500ece584c472&w=996',
        inStock: 6,
        quantity: 1,
        description: 'A modern office desk designed for productivity. With a large surface area and sleek design, it’s perfect for home offices, offering plenty of space for work essentials.'
    }
];
