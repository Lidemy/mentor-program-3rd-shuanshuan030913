## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？

gulp 是把工作流程自動化，像是我們寫 CSS 預處理器需要編譯，或是把最終寫好的檔案壓縮。
webpack 則是幫我們把分散的檔案打包，CSS、script、圖片等整合在一起。

當然可以不使用這些工具，不過工具的存在就是為了讓我們更方便的完成工作。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？

當我要更新一個 list 的時候，全部的 list 都要重新讀取，但其實原來的 list 是可以沿用的，耗費效率資源。

## CSS Sprites 與 Data URI 的優缺點是什麼？

* CSS Sprites
> 一種網站圖片應用的方法，可以把很多張小圖合併到一張大圖裡。

優點：
1. 減少 http 讀取多個檔案的時間，本來要讀很多檔案，現在只要讀一張，增進使用者體驗
2. 減少圖片檔案大小（合併後的圖片大小比多張小圖來說更節省空間大小）
3. 減少命名圖片的困擾

缺點：
1. 製作圖片的時候比較麻煩，需要精確對位
2. 如果要修改圖片，也是要重新製作一次，又如果位置有更動，連 CSS 也要重新計算位置

* Data URL
> 透過網站工具（如 base64 image）將圖片轉成 Base64 編碼字串，透過 data URI scheme 直接寫進 HTML 或 CSS 中。

範例：
```html
<style type="text/css">
div.image {
width: 100px;
height: 100px;
background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJklEQVQ4Ea1UW2xUVRRd9zXTefQ5bZHSYKUOg3WIDZE6LbFCqEowFDVggqKS6I/G+OGXUUz0w8iXIgpNhDQG5ceg0JZRDBqI2jJtU61UW8uElNLSQplOh+m00+l9HPe+01GJ+OdO1r377sc6+5y9zwX+Z5H+iy9QhOCWO/HEAytRX1mqVnLceMwY776C86dHcWI4gd9ul/svwpI8lL+5Hvv2NJc+m1+7SVVWboDkqbBzxdwEzCudmO0/a3zaHvvs3V68Hl/A1O2I2SbdVYA13S/IUf3rJiFip4SY6xciGRFi5ocsWGcb+TiGYzmHc3OkOUUqdqL8zHNypPaZLVXK2peBzCxgzQNC5GKzb4lSZDfgzIc5cAj9x05ffvioFZrJ2JUKZSlaea9RamnetapRDe4C0hOATjuxiNQk6EnA4AVSWZs+TQtOQ/YFUO6KFrmuJZZ/exltxGUTyv4i1La86Drguq9OgqxRMJFpaWCRiBSqMkNvk8hU0nO2dJxsC5BdMmocY8Eve4x2Os/rMrEq26qlp92VXhmSAcyPUGIMg92/4vndn+BcRyd9X7fBOtvYxzF2rGKAc5mDuVR6qPXVakgpcNDq1+iTKoSFk8d/R4XHQrjtAjbeT9slCbeN2LaTx/tQs+ZeYIHr0cG5zIE+XWWLVuFTyqExISUuxiDicRSv8OLtD4IIrCtFKmHZYP0dsrGPYzjWbp7DAZuDuLjLJZ0vOSKh7WV+2Uk9cpiAlzrroOIti0C2DNlY2C+TznXM0/GkKF1XYJE/0n4juqFlMcRbFlfjZgx6yg8XsPetOfh8BgJ3A8vuAIpKgDyy0ykgTX1KUGGTk8DgH8Rlatj7hgeYFSCOG8zFhHpkxLrweEavl70GdHch5IeOIu5OYyw2CvPSFCxjPju5mgeaexncNVVAqQGzZw/gmYc5poE4BpiLAM1fjObkQacpBrziu/0QOxvrxKGD74sfe38Rk0lT6EKIDGE8nhFnu7rFgf37xJMNa0X3YRr7fq9IfuQ0mYO5uEIjOoO+1g49/Ooqbdvm7V6MDvVg5HAPJr4AvqLjsrh1JHx81HiIBLCzCah7hJpDdbWG9TBzUIiRu3oO+ik0fP+K+nntDtcK0L/lm2M6UkMGCvJMWjZ7/XRdRjIjo7hWRdNTNF40sv0n0lc3f2zspqHuIsLF3NWz0gZunhm0og+6rNDyMqXQv0mDu0rFTUVBmsZVL9TgqtYQ3OrAugba2LCFnzsWxnYcMV6bSOE8kdE1ulW42jKfC49+uFU+NdvqNESXR4hLBUKMLYH1nzxi9ojT4BiO5RxCbqd/K0vc7MgnVAZ8WP/YamljaLV8T2W5VMr+8SkRi1y0hsIXxbnhafSyicDXKHsmpPzFTPo/hdtQRCgm0KCBrpEti/ScI8wQqDU8nbfKny8J3bgvSgspAAAAAElFTkSuQmCC');
}
</style>
```

優點：減少 http request（直接寫在程式碼內）

缺點：
1. 沒有辦法像讀圖一樣被暫存
2. 轉碼後的檔案會比原來的檔案還要大
3. 可讀性差