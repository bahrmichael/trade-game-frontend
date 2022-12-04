import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Code your way to victory!"
    description="API Empires is a thrilling combination of industry, trade and coding, offering endless possibilities and intense competition. A must-play for strategy and technology fans."
  >
    <VerticalFeatureRow
      title="Easy to get started"
      description="API Empires is easy to get started with because it uses the widely-used OpenAPI specification, has thorough documentation, and has a vibrant Discord community where players can find help and support. These factors make it simple for players to quickly learn the game's mechanics and start building their own empires."
      image="https://images.unsplash.com/photo-1586282023338-52aa50a846ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      imageAlt="alt text"
    />
    <VerticalFeatureRow
      title="Build and use third-party apps"
      description="The game's API allows players to create their own custom applications and tools, which can be used to gain an edge over other players or to help each other out."
      image="https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      imageAlt="alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Adapt to changing market conditions"
      description="The game's dynamic market means that players will need to constantly adapt and adjust their strategies in order to stay ahead of their competitors. This adds an extra layer of challenge and excitement to the game."
      image="https://images.unsplash.com/photo-1593617761943-9099951a0769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      imageAlt="alt text"
    />
  </Section>
);

export { VerticalFeatures };
