import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../templates/Footer';
import { Navbar } from '../../templates/Navbar';
import { AppConfig } from '../../utils/AppConfig';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <Navbar />
      </Section>
    </Background>
    <Section yPadding="pt-6">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line">
        Documentation
      </h1>
      <p className="my-4 text-xl">
        The API Empires documentation is a valuable resource for players who
        want to get started with the game. It provides step-by-step instructions
        for creating an API key, accessing game instances, and building your
        first trading route.
      </p>
      <p className="my-4 text-xl">
        With the help of the documentation, you can quickly learn how to access
        the game's API and start building your empire. You'll be able to learn
        about the different game instances, and how to access them using your
        API key.
      </p>
      <p className="my-4 text-xl">
        Once you've accessed an instance, you can start building your first
        trading route. The documentation provides detailed instructions for
        creating a route, including how to specify the starting and ending
        points, the type of goods you want to trade, and any other relevant
        details.
      </p>
      <p className="my-4 text-xl">
        Overall, the API Empires documentation is an essential tool for players
        who want to get started with the game and build successful empires. It
        provides clear and concise instructions, making it easy to learn the
        game's mechanics and start building your empire.
      </p>
    </Section>
    <Section yPadding="py-6">
      <h2 className="mb-4 text-3xl text-gray-900 font-bold whitespace-pre-line">
        Instances
      </h2>
      <p className="my-4 text-xl">
        In the API Empires game, instances are separate game environments that
        are fully isolated from each other. This means that players are unable
        to transfer funds or goods between different instances. Market
        conditions may also vary between instances, so players may need to
        adjust their strategies accordingly.
      </p>
      <p className="my-4 text-xl">
        Each instance has a version number that is updated when the game
        developers introduce breaking changes to that particular instance. The
        version number follows the date pattern "YYYYMMDD", for example
        "20221012".
      </p>
      <p className="my-4 text-xl">
        An instance becomes deprecated when the game developers introduce a new
        "latest" instance after making breaking changes to the game. When this
        happens, players are advised to migrate their operations to the new
        "latest" instance, as the deprecated instance may no longer be updated
        or supported. This is important because continuing to use a deprecated
        instance may cause players to encounter errors or other issues that
        could affect their ability to play the game. Therefore, it is
        recommended that players migrate to the new "latest" instance as soon as
        possible to ensure that they can continue to play the game without any
        interruptions.
      </p>
    </Section>
    <Section yPadding="py-6">
      <h2 className="mb-4 text-3xl text-gray-900 font-bold whitespace-pre-line">
        Getting Started
      </h2>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        1. Join the Discord community
      </h3>
      <p className="my-4 text-xl">
        To get started with API Empires, the first step is to join the game's
        Discord community. This will allow you to connect with other players,
        ask questions, and get support.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        2. Create an API key
      </h3>
      <p className="my-4 text-xl">
        Once you've joined the Discord community, you can create your API key by
        visiting the URL url.com/api-key/start. This key will allow you to
        access the game's API and start building your empire.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        3. Use the OpenAPI UI
      </h3>
      <p className="my-4 text-xl">
        With your API key in hand, you can use the OpenAPI user interface (UI)
        at url.com/openapi to start building your empire. The OpenAPI UI
        provides an easy-to-use interface for accessing the game's API and
        implementing your strategies.
      </p>
    </Section>
    <Section yPadding="py-6">
      <h2 className="mb-4 text-3xl text-gray-900 font-bold whitespace-pre-line">
        Run your first trade
      </h2>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        1. Take out a loan
      </h3>
      <p className="my-4 text-xl">
        To get started, you'll need some capital to invest in your trading
        business. You can take out a loan from the bank by using the game's API
        to access the "bank" instance and requesting a loan.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        2. Buy a truck
      </h3>
      <p className="my-4 text-xl">
        With your loan funds, you can then use the API to access the "market"
        instance and buy a truck. This will be your primary means of
        transporting goods between locations.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        3. Send the truck to a farm
      </h3>
      <p className="my-4 text-xl">
        Once you have your truck, you'll need to send it to a farm to pick up
        some goods. You can use the API to access the "map" instance and specify
        the farm location as the truck's destination.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        4. Buy goods
      </h3>
      <p className="my-4 text-xl">
        When the truck reaches the farm, you'll need to use the API to purchase
        goods. The truck won't pick them up automatically, you'll have to make
        an API call to do so. You can then use the API to check the truck's
        inventory to see what goods it has collected.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        5. Send the truck to a market
      </h3>
      <p className="my-4 text-xl">
        With the goods loaded, you can then use the API to send the truck to a
        market to sell the goods. You'll need to choose a market location and
        specify it as the truck's destination.
      </p>
      <h3 className="text-xl text-gray-900 font-bold whitespace-pre-line">
        6. Sell the goods
      </h3>
      <p className="my-4 text-xl">
        When the truck reaches the market, it will automatically sell the goods
        it is carrying. You can use the API to check the market's inventory and
        see what goods have been sold.
      </p>
    </Section>
    <Footer />
  </div>
);

const Index = () => <Base />;

export default Index;
