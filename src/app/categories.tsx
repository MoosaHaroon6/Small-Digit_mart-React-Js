"use client";

type CategoriesType = {
    categories: string[];
    selectCategory: (categoryName: string) => void;
};

export default function Categories({ categories, selectCategory }: CategoriesType) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '400px',
                margin: 'auto',
                flexWrap: 'wrap',
                height: '150px',
                marginTop: '40px'
            }}>
            {
                categories.map((category, i) => (
                    <button
                        key={category + i}
                        style={
                            {
                                padding: '10px 20px', width: '180px', fontSize: '1.1rem',
                                borderRadius: '5px', border: '1px solid gray', height: '40px'
                            }
                        }
                        onClick={() => { selectCategory(category) }}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
} 