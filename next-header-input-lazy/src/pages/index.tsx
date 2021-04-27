import { Layout } from "../Layout";

export function Page(props: { children: React.ReactNode }) {
  return (
    <Layout>
      <h1>Content Title</h1>
      <p>Yup, this is a website.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac orci phasellus
        egestas tellus rutrum. Massa id neque aliquam vestibulum morbi. Aliquam
        purus sit amet luctus venenatis lectus magna fringilla. Hendrerit dolor
        magna eget est. Et tortor consequat id porta nibh venenatis cras sed.
        Morbi tincidunt ornare massa eget egestas purus. Non pulvinar neque
        laoreet suspendisse interdum. Pellentesque nec nam aliquam sem. Eu sem
        integer vitae justo eget magna. Amet nulla facilisi morbi tempus
        iaculis. Nam at lectus urna duis convallis convallis. Eu sem integer
        vitae justo eget magna fermentum. Et ligula ullamcorper malesuada proin
        libero nunc. Risus nullam eget felis eget nunc. Iaculis at erat
        pellentesque adipiscing commodo elit.
      </p>
    </Layout>
  );
}

export default Page;
