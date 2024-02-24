
import "./globals.css";
import {
  ChakraProvider
} from '@chakra-ui/react'

export const metadata = {
  title: "Love you forever 💓",
  description: "ส่งครูงับ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
            {children}
        </ChakraProvider>
        </body>
    </html>
  );
}
