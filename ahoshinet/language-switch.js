const jaBtn = document.getElementById('jaBtn');
const enBtn = document.getElementById('enBtn');

function setLanguage(lang) {
    const elementsToUpdate = [
        // nav
        { selector: '#navAbout', ja: '会社情報', en: 'About' },
        { selector: '#navBusinesses', ja: '事業内容', en: 'Businesses' },
        { selector: '#navContact', ja: 'お問い合わせ', en: 'Contact' },

        // first screen
        { selector: '#main_title', ja: '未来をつなぐ、Ahoshinet Groups', en: 'Connecting the Future with Ahoshinet Groups' },
        { selector: '#sub_title', ja: '革新的なテクノロジーで、次世代のインフラを。', en: 'Innovative Technologies for Next-Generation Infrastructure.' },
        { selector: '#heroButton', ja: '詳しく見る', en: 'Learn More' },

        // business
        { selector: 'h2', ja: '事業紹介', en: 'Our Businesses' },
        { selector: '#business1', ja: 'インターネット事業', en: 'Internet Services' },
        { selector: '#business2', ja: 'クラウドソリューション', en: 'Cloud Solutions' },
        { selector: '#business3', ja: 'セキュリティ事業', en: 'Security Services' },
        { selector: '#business1_desc', ja: '超高速・超低遅延の次世代通信インフラをご提供します。', en: 'Providing ultra-high-speed, low-latency next-generation network infrastructure.' },
        { selector: '#business2_desc', ja: 'セキュアで拡張性の高いクラウド環境を構築しています。', en: 'Building secure and highly scalable cloud environments tailored to your needs.' },
        { selector: '#business3_desc', ja: '万全のセキュリティ体制で、お客様の大切な情報を守ります。', en: 'Comprehensive security measures to protect your valuable information.' },

        // ceo message
        { selector: '#ceo_title', ja: 'CEOメッセージ', en: 'CEO Message' },
        { selector: '#ceo_msg', 
                ja: '私たちは常に技術革新を追求しています。最先端のインターネット技術をはじめ、AIソリューションや開発者向けの便利な機能を継続的に提供することで、お客様に安心・安全、そして高速なサービス体験をお届けします。',
                en: 'We are constantly pursuing technological innovation. By continuously providing cutting-edge internet technologies, AI solutions, and convenient features for developers, we deliver a safe, secure, and high-speed service experience to our customers.'
        },
        
        // company info
        { selector: '#company_ovv', ja: '企業概要', en: 'Company Overview' },
        { selector: '#founded', ja: '設立', en: 'Founded' },
        { selector: '#f_date', ja: '2025年 1月 19日', en: 'Jan 19, 2025' },

        { selector: '#location', ja: '本社所在地', en: 'Location' },
        { selector: '#location_head', ja: '日本, 東京都', en: 'Tokyo, Japan (Headquarters)' },

        { selector: '#emplo', ja: '従業員数', en: 'Employees' },
        { selector: '#emplo_int', ja: '約300人以上', en: 'Over Approximately 300 Employees' },

        { selector: '#main_business', ja: '主な事業', en: 'Main Business' },
        { selector: '#main_business_detail',
                ja: 'インターネット事業、クラウドソリューションサービス、サイバーセキュリティ',
                en: 'Internet Services, Cloud Solutions, Cybersecurity' 
        },

        // our vision
        { selector: '#title_ourvision', ja: '私たちのビジョン', en: 'Our Vision' },
        { selector: '#ourvision', 
                ja: 'Ahoshinetグループは、技術革新の推進とグローバルな接続性の向上に尽力するチームの集合体です。私たちは、セキュリティ、スピード、そして揺るぎない信頼性を備え、インターネットの未来をお客様にお届けします。',
                en: 'Ahoshinet Groups is a collective of teams committed to driving technological innovation and advancing global connectivity. We bring the future of the internet to our customers with security, speed, and unwavering reliability. '
        },
        
        // join us
        { selector: '#title_jointeam', ja: '私たちと働く', en: 'Join Our Team' },
        { selector: '#desc_jointeam', 
                ja: '私たちは常に、テクノロジーの未来を形作ることに情熱を抱く才能ある人材を求めています。次世代のデジタルインフラを共に築き上げていきましょう。',
                en: 'We are always looking for talented individuals passionate about shaping the future of technology. Join us to create the next generation of digital infrastructure together.'
        },
        { selector: '#explore_careers', ja: '採用情報', en: 'Explore Careers' },

        // disclaimer
        { selector: '#disclaimer', ja: '免責事項', en: 'Disclaimer' },
        { selector: '#disclaimer_txt', 
                ja: '「Ahoshinet Internet Co., Ltd.」は完全に架空の組織です。「Ahoshinet Groups」は概念として存在しますが、実在の組織を表すものではありません。',
                en: 'The entities "Ahoshinet Internet Co., Ltd." and "Ahoshinet Logistics" are entirely fictional. While "Ahoshinet Groups" and "Ahoshinet Team" exist as concepts, they do not represent real-world organizations.'
        },
    ];
    
    elementsToUpdate.forEach(item => {
        const el = document.querySelector(item.selector);
        if (el) {
            el.textContent = lang === 'JA' ? item.ja : item.en;
        }
    });

    if (lang === 'JA') {
        jaBtn.classList.add('border-blue-600', 'text-blue-600');
        enBtn.classList.remove('border-blue-600', 'text-blue-600');
    } else {
         enBtn.classList.add('border-blue-600', 'text-blue-600');
        jaBtn.classList.remove('border-blue-600', 'text-blue-600');
    }
}

jaBtn.addEventListener('click', () => setLanguage('JA'));
enBtn.addEventListener('click', () => setLanguage('EN'));

setLanguage('JA');