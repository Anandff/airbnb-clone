const properties = [
  {
    id: 1,
    title: "Beach House",
    location: "Goa",
    category: "Beach",
    price: "₹5,000",
    rating: "4.9",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Mountain Cabin",
    location: "Manali",
    category: "Mountain",
    price: "₹4,500",
    rating: "4.8",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Luxury Villa",
    location: "Jaipur",
    category: "Luxury",
    price: "₹8,000",
    rating: "5.0",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: 4,
    title: "Lake View Stay",
    location: "Nainital",
    category: "Lake",
    price: "₹6,000",
    rating: "4.7",
    image: "https://picsum.photos/600/400?random=4"
  },
  {
  id: 5,
  title: "Desert Camp",
  location: "Jaisalmer",
  category: "Adventure",
  price: "₹3,500",
  rating: "4.6",
  image: "https://picsum.photos/600/400?random=5"
},
{
  id: 6,
  title: "City Apartment",
  location: "Mumbai",
  category: "City",
  price: "₹7,000",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=6"
},
{
  id: 7,
  title: "Forest Retreat",
  location: "Coorg",
  category: "Nature",
  price: "₹5,500",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=7"
},
{
  id: 8,
  title: "Snow Resort",
  location: "Kashmir",
  category: "Mountain",
  price: "₹9,000",
  rating: "5.0",
  image: "https://picsum.photos/600/400?random=8"
},
{
  id: 9,
  title: "Island Cottage",
  location: "Andaman",
  category: "Beach",
  price: "₹6,500",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=9"
},
{
  id: 10,
  title: "Heritage Palace",
  location: "Udaipur",
  category: "Luxury",
  price: "₹12,000",
  rating: "5.0",
  image: "https://picsum.photos/600/400?random=10"
},
{
  id: 11,
  title: "Pine Cabin",
  location: "Shimla",
  category: "Mountain",
  price: "₹4,800",
  rating: "4.7",
  image: "https://picsum.photos/600/400?random=11"
},
{
  id: 12,
  title: "Woodland Cabin",
  location: "Mussoorie",
  category: "Mountain",
  price: "₹5,200",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=12"
},
{
  id: 13,
  title: "Riverside Cabin",
  location: "Rishikesh",
  category: "Nature",
  price: "₹4,900",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=13"
},
{
  id: 14,
  title: "Treehouse Escape",
  location: "Wayanad",
  category: "Nature",
  price: "₹6,000",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=14"
},
{
  id: 15,
  title: "Hilltop Cabin",
  location: "Darjeeling",
  category: "Mountain",
  price: "₹5,500",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=15"
},
{
  id: 16,
  title: "Ocean Breeze Villa",
  location: "Pondicherry",
  category: "Beach",
  price: "₹7,500",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=16"
},
{
  id: 17,
  title: "Backwater Stay",
  location: "Alleppey",
  category: "Lake",
  price: "₹6,200",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=17"
},
{
  id: 18,
  title: "Royal Haveli",
  location: "Jodhpur",
  category: "Luxury",
  price: "₹11,000",
  rating: "5.0",
  image: "https://picsum.photos/600/400?random=18"
},
{
  id: 19,
  title: "Tea Garden Cottage",
  location: "Munnar",
  category: "Nature",
  price: "₹5,800",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=19"
},
{
  id: 20,
  title: "Snow Peak Cabin",
  location: "Auli",
  category: "Mountain",
  price: "₹6,500",
  rating: "5.0",
  image: "https://picsum.photos/600/400?random=20"
},
{
  id: 21,
  title: "Lakeside Cabin",
  location: "Bhimtal",
  category: "Cabin",
  price: "₹5,300",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=21"
},
{
  id: 22,
  title: "Cedar Cabin",
  location: "Kasauli",
  category: "Cabin",
  price: "₹5,700",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=22"
},
{
  id: 23,
  title: "Hidden Valley Cabin",
  location: "Tirthan Valley",
  category: "Cabin",
  price: "₹6,200",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=23"
},
{
  id: 24,
  title: "Alpine Cabin",
  location: "Sikkim",
  category: "Cabin",
  price: "₹6,500",
  rating: "5.0",
  image: "https://picsum.photos/600/400?random=24"
},
{
  id: 25,
  title: "Sunset Cabin",
  location: "Narkanda",
  category: "Cabin",
  price: "₹5,900",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=25"
},
{
  id: 26,
  title: "Forest Camping Site",
  location: "Coorg",
  category: "Camping",
  price: "₹2,500",
  rating: "4.7",
  image: "https://picsum.photos/600/400?random=26"
},
{
  id: 27,
  title: "Mountain Camp",
  location: "Kasol",
  category: "Camping",
  price: "₹3,000",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=27"
},
{
  id: 28,
  title: "Lakeside Camping",
  location: "Nainital",
  category: "Camping",
  price: "₹2,800",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=28"
},
{
  id: 29,
  title: "Desert Camping",
  location: "Jaisalmer",
  category: "Camping",
  price: "₹3,200",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=29"
},
{
  id: 30,
  title: "Riverside Camp",
  location: "Rishikesh",
  category: "Camping",
  price: "₹2,900",
  rating: "4.7",
  image: "https://picsum.photos/600/400?random=30"
},
{
  id: 31,
  title: "Green Valley Farm Stay",
  location: "Nashik",
  category: "Farm",
  price: "₹4,000",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=31"
},
{
  id: 32,
  title: "Organic Farm Retreat",
  location: "Pune",
  category: "Farm",
  price: "₹4,500",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=32"
},
{
  id: 33,
  title: "Countryside Farm House",
  location: "Amritsar",
  category: "Farm",
  price: "₹3,800",
  rating: "4.7",
  image: "https://picsum.photos/600/400?random=33"
},
{
  id: 34,
  title: "Mango Farm Villa",
  location: "Ratnagiri",
  category: "Farm",
  price: "₹5,000",
  rating: "4.9",
  image: "https://picsum.photos/600/400?random=34"
},
{
  id: 35,
  title: "Village Farm Escape",
  location: "Mysore",
  category: "Farm",
  price: "₹4,200",
  rating: "4.8",
  image: "https://picsum.photos/600/400?random=35"
}
];

export default properties;