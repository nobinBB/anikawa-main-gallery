function switchTab(galleryId, buttonElement) {
    // すべてのギャラリーを非表示にする
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.remove('active');
    });

    // すべてのタブボタンからactiveクラスを削除
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 選択されたギャラリーを表示
    document.getElementById(galleryId).classList.add('active');
    
    // 選択されたボタンにactiveクラスを追加
    buttonElement.classList.add('active');

    // ページトップにスムーズスクロール
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // ギャラリーアイテムにアニメーション効果を追加
    const activeGallery = document.getElementById(galleryId);
    const items = activeGallery.querySelectorAll('.gallery-item');
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100 + 300); // スクロール後にアニメーション開始
    });
}

// モーダル関連の関数
function openModal(imgElement, category) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTag = document.getElementById('modalTag');
    
    // クリックされた画像のsrcを取得
    const imageSrc = imgElement.src;
    
    // モーダルの内容を設定
    modalImage.src = imageSrc;
    modalTag.textContent = category;
    
    // モーダルを表示
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // スクロールを無効化
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // スクロールを有効化
}

// モーダル外をクリックして閉じる
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// スクロール時のタブ追従効果
window.addEventListener('scroll', function() {
    const tabs = document.querySelector('.tabs');
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
        tabs.classList.add('scrolled');
    } else {
        tabs.classList.remove('scrolled');
    }
});

// ページ読み込み時のアニメーション
window.addEventListener('load', function() {
    const items = document.querySelectorAll('#gallery1 .gallery-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// インタラクティブな効果
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const image = this.querySelector('.gallery-image');
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const image = this.querySelector('.gallery-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});