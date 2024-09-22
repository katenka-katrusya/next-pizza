import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/src/components/shared'

export default function Home() {
  return (
    <>
      <Container className='pt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='pt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Пицца с ветчиной и сыром',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Додо Микс',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    price: 770,
                    items: [{ price: 770 }],
                  },
                  {
                    id: 3,
                    name: 'Мясная',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 320,
                    items: [{ price: 320 }],
                  },
                  {
                    id: 4,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 5,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 6,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 7,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 8,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Пицца с ветчиной и сыром',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Додо Микс',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE24316D49CCFA979EBAB4534A60D.avif',
                    price: 770,
                    items: [{ price: 770 }],
                  },
                  {
                    id: 3,
                    name: 'Мясная',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif',
                    price: 320,
                    items: [{ price: 320 }],
                  },
                  {
                    id: 4,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 5,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 6,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 7,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 8,
                    name: 'Додо',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6101F670D6AA756B1C989E0489.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
