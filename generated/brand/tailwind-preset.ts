const preset = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D2147C',
          black: '#141414',
          white: '#FFFFFF'
        },
        neutral: {
          "100": "#F8F8F8",
          "200": "#F1F1F1",
          "300": "#E2E2E2",
          "600": "#858585",
          "700": "#575757",
          "800": "#282828"
},
        fluorescent: {
          yellow: '#FFE600',
          orange: '#FF6B00',
          pink: '#FF3399',
          green: '#00FF88',
          blue: '#00CFFF',
          purple: '#CC00FF'
        },
        action: {
          primary: '#D2147C',
          primaryHover: '#141414',
          secondary: '#141414',
          secondaryHover: '#D2147C'
        }
      },
      fontFamily: {
        heading: ['Oswald', 'Arial Narrow', 'sans-serif'],
        body: ['Nunito Sans', 'Arial', 'sans-serif']
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.05', fontWeight: '700' }],
        'heading-md': ['1.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'title-lg': ['1.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        price: ['1.375rem', { lineHeight: '1.1', fontWeight: '800' }],
        body: ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        label: ['0.875rem', { lineHeight: '1.2', fontWeight: '700' }]
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem"
},
      borderRadius: { sm: '2px', md: '8px' },
      boxShadow: { card: '0 8px 24px rgba(20, 20, 20, 0.08)', cta: '0 10px 24px rgba(210, 20, 124, 0.22)' }
    }
  }
};

export default preset;
