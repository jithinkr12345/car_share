import Rider from "./pages/Rider";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/rider" element={<Rider/>}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }