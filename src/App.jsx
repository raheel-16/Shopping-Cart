import Header from './routes/header';
import Footer from './routes/footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <section className="flex-1">
        <div className='w-full max-w-screen-lg mx-auto'>
          <img src='/assests/nataliya-melnychuk-oO0JAOJhquk-unsplash.jpg' alt="img" />
        </div>
        <section className='about flex-1'>
          <div>
            <h3 className="text-3xl">Tomorrows Solutions, Today</h3>
          </div>
          <div className='company-info m-10 flex-1 flex justify-center items-center' data-testid={'company-info-id'}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dolor orci. Fusce vehicula viverra neque, in fringilla enim maximus eget. Donec eu interdum lorem. Quisque quis ultricies tortor. Proin imperdiet nibh quis eros laoreet gravida. Sed orci tellus, ornare quis dolor eget, dictum aliquet metus. Phasellus auctor condimentum nunc, rhoncus ornare leo sollicitudin nec. Vestibulum id tellus venenatis, pharetra ipsum ac, dapibus neque. Etiam sed condimentum risus, congue imperdiet dolor. Pellentesque porttitor lorem sed gravida feugiat.

                Vestibulum id orci sit amet diam consectetur cursus. Integer tristique at augue a sodales. Nunc nec nisl lectus. Nullam ultrices mollis felis vitae blandit. Cras auctor felis sed tellus mollis dictum. Nullam gravida orci lectus, quis malesuada nisi vulputate et. Donec vitae nisl dolor. Pellentesque dictum rhoncus tortor vitae commodo. Fusce vestibulum convallis ex, scelerisque faucibus mi commodo id. In est ligula, dictum at libero vitae, maximus tincidunt nulla. In eu posuere lorem. Suspendisse dictum ut lectus sed sollicitudin.

                Suspendisse auctor consectetur bibendum. Aliquam a arcu metus. Cras cursus malesuada sem, ac congue nulla pellentesque nec. Fusce tristique felis vitae urna pellentesque convallis. Donec scelerisque arcu ac erat porta placerat. Donec vel euismod est. Nullam in cursus nisi. Quisque lacinia velit ante, sed convallis sapien tincidunt id. Morbi a nibh vitae augue ultricies volutpat. Pellentesque nisi mauris, tristique eget laoreet id, luctus sed neque. Quisque tristique lacus at odio finibus placerat. Sed eu tortor id ligula malesuada bibendum id quis metus. Duis vitae velit quam. Ut eget nunc felis. Phasellus eget pulvinar enim.
              </p>
            </div>
            <div>
              <p>
                Praesent fermentum facilisis eros non porttitor. Etiam ipsum erat, volutpat sagittis leo in, scelerisque efficitur urna. Etiam eu dapibus lectus. Vivamus iaculis nibh id purus condimentum, bibendum rutrum velit feugiat. Mauris sodales massa nec dui suscipit luctus. Ut fermentum maximus eros, vitae sodales lectus rutrum sit amet. Fusce vel ante eget diam aliquam gravida. Nam venenatis maximus orci, sit amet tincidunt eros vestibulum sit amet. Nunc erat purus, faucibus nec ornare vel, fermentum vel leo. Nam lacus odio, gravida hendrerit dolor quis, tristique efficitur metus. Curabitur eget diam vel nunc sollicitudin dignissim.

                Duis neque elit, suscipit sit amet viverra eget, vulputate sit amet sapien. Mauris vel sapien felis. Nulla facilisi. Mauris pharetra, nulla et sagittis varius, lectus erat porttitor ligula, vitae dictum arcu elit non ipsum. Aliquam pharetra ipsum ante, at euismod ipsum tempor egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis facilisis ante augue, eget aliquet elit ornare nec. Nullam commodo nunc nisi, quis tincidunt erat suscipit vel. Ut ligula nibh, pretium vitae semper a, hendrerit sed elit. Curabitur id massa consectetur, venenatis odio eu, rutrum velit. Ut id ex turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac ullamcorper velit. Nunc ut placerat ante. Maecenas suscipit, neque quis blandit euismod, ex metus tempus eros, venenatis placerat augue est quis nunc. Pellentesque quis sem consequat, venenatis sem ac, tincidunt ipsum.
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
