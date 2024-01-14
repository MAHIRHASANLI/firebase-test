
// Proje Yapısını Oluşturun:
// Öncelikle, bir proje klasörü oluşturun ve içine giriş dosyanız(index.js gibi) ve diğer JavaScript dosyalarınızı ekleyin.Ayrıca, Firebase bağımlılığını da projenize ekleyin:


// Yüklənmə--------------------------------
//   1.  npm init - y
// 2.Komand: $ npm install --save firebase
// Proje klasörünüz şu şekilde görünebilir:


// Yaradılacağ file
// 3.    / your - project
// ├── src
// │   └── index.js
// ├── node_modules
// └── package.json
// Webpack Kurulumu:
// Webpack'i projenize eklemek için:


// 4. Webpack Kurulumu:
// Webpack'i projenize eklemek için:
// Komand: $ npm install --save-dev webpack webpack-cli
// Bu, Webpack ve Webpack CLI'yi geliştirici bağımlılıkları olarak projenize ekler.

// 5. Webpack Konfigürasyon Dosyası:
// Projeyinizin ana klasörüne `${ webpack.config.js }` adında bir dosya ekleyin ve içine Webpack konfigürasyonunu tanımlayın:

// KOD:
// const path = require('path');

// module.exports = {
//     mode: 'development', // və ya 'production' və ya 'none'
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//         static: path.join(__dirname, 'dist'),
//         compress: true,
//         port: 9000
//     }
// };

// Bu konfigürasyon, ./ src / index.js dosyasını ana giriş olarak alacak ve çıkış olarak./ dist / bundle.js dosyasını oluşturacaktır.

// NPM Script Ekleyin:
// package.json dosyanıza bir NPM scripti ekleyerek Webpack'i çalıştırabilirsiniz. package.json dosyanız şu şekilde olmalıdır:

// json
// Copy code
// {
//     "scripts": {
//         "build": "webpack"
//     }
// }
// Bu, terminal veya komut istemcisinde `npm run build` komutuyla Webpack'i çalıştıracaktır.

// Webpack Çalıştırın:
// Terminal veya komut istemcisinde projenizin ana klasöründe şu komutu çalıştırarak Webpack'i çalıştırın:

// bash
// Copy code
// npm run build
// Bu, Webpack'in giriş dosyanızı işleyip çıkış dosyanızı oluşturmasını sağlar.

// Firebase'i Projeye Ekleyin:
// Şimdi Firebase modüllerini projenize ekleyebilir ve Webpack tarafından oluşturulan bundle.js dosyasında kullanabilirsiniz.


// // src/index.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: 'your-api-key',
//     authDomain: 'your-auth-domain',
//     projectId: 'your-project-id',
//     storageBucket: 'your-storage-bucket',
//     messagingSenderId: 'your-messaging-sender-id',
//     appId: 'your-app-id'
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Geri kalan kodu buraya ekleyin
// Bu dosyada Firebase modüllerini, Webpack tarafından oluşturulan bundle.js içinde kullanabilirsiniz.

// Bu adımları takip ettikten sonra, projeniz Webpack tarafından işlenirken Firebase modüllerini kullanabilir ve birleştirilmiş bir JavaScript dosyası elde edebilirsiniz.







// ------------------------------------------------------------------------------------
// Avto Save

// 1. Webpack, geliştirme sırasında dinamik olarak değişiklikleri takip etmek ve otomatik olarak projenizi güncellemek için "Webpack Development Server" gibi bir hizmet sunar. Bu hizmet, webpack-dev-server olarak bilinir ve projenizi geliştirirken anlık olarak değişiklikleri görmek için kullanılır.

// İşte webpack-dev-server'ı projenize nasıl entegre edeceğinize dair basit bir örnek:

// webpack-dev-server Kurulumu:
// Önce, webpack-dev-server'ı yükleyin:

// // Yüklənməsi
// KOMAND: $ npm install --save-dev webpack-dev-server
// package.json Düzenlemesi:
// package.json dosyanızdaki "scripts" bölümüne start komutunu ekleyin:



// // package.json
// {
//   "scripts": {
//     "start": "webpack-dev-server --open"
//   }
// }
// Bu komut, webpack-dev-server'ı çalıştırır ve projenizi tarayıcıda otomatik olarak açar.

// Webpack Ayarlarına Dev Server Ekleyin:
// webpack.config.js dosyanıza devServer özelliğini ekleyin:

// javascript
// // webpack.config.js


// const path = require('path');
// // import { path } from 'path'
// module.exports = {
//     mode: 'development', // və ya 'production' və ya 'none'
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devServer: {
//         static: path.join(__dirname, 'dist'),
//         compress: true,
//         port: 9000
//     }
// };
// Bu ayarlar, Webpack Development Server'ın hangi klasörde çalışacağını (contentBase), sıkıştırma özelliğini aktif ettiğini (compress) ve hangi portu kullanacağını (port) belirtir.

// Webpack Development Server'ı Çalıştırın:
// Terminal veya komut istemcisinde aşağıdaki komutu çalıştırarak Webpack Development Server'ı başlatın:


// Komand: npm start
// Bu komut, tarayıcınızı otomatik olarak açacak ve http://localhost:9000 adresinde geliştirme sunucusunu başlatacaktır.

// Artık, index.js dosyanızdaki herhangi bir değişiklik, tarayıcıda otomatik olarak yenilenecek ve güncellenecektir. Bu sayede her defasında manuel olarak bundle.js dosyasını oluşturmanıza gerek kalmaz.

// 2. watch


// webpack.config.js

// const path = require('path');

// module.exports = {
//   entry: {
//     file1: './src/file1.js',
//     file2: './src/file2.js',
//     // Diğer JS dosyalarını ekleyin
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   watch: true, // Watch modunu etkinleştirin
// };
// npx webpack--watch

// Bu komut, Webpack'i izleme modunda başlatır ve dosyalarda değişiklik yapıldığında otomatik olarak derleme işlemi yapar.

// İsterseniz --watch yerine sadece -w seçeneğini de kullanabilirsiniz:


// npx webpack -w
// Bu komutu çalıştırdıktan sonra, dosyalarda herhangi bir değişiklik algılandığında Webpack otomatik olarak çalışacak ve projenizi güncelleyecektir.