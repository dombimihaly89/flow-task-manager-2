import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractApiConnector } from '~/app/shared/api-connectors/AbstractApiConnector';
import { ConfigurationService } from '~/app/shared/services/configuration.service';
import { TaskApiConnector } from '../api-connectors/TaskApiConnector';
import { SolutionApiConnector } from '../api-connectors/SolutionApiConnector';
import { RatingApiConnector } from '../api-connectors/RatingApiConnector';

export enum Connector {
  TASK = '[Task]',
  SOLUTION = '[Solution]',
  RATING = '[Rating]'
}

@Injectable()
export class ApiCommunicationService {
  private readonly apiBaseUrl: string;
  private connectors: Map<Connector, AbstractApiConnector>;

  constructor(private readonly http: HttpClient,
              private readonly configurationService: ConfigurationService) {
    // set base url
    this.apiBaseUrl = this.configurationService.fetchConfig('baseUrl');

    // map of connectors
    this.connectors = new Map<Connector, AbstractApiConnector>();

    // register connectors
    this.registerConnector(
      Connector.TASK,
      new TaskApiConnector(this.http, this.apiBaseUrl)
    );

    this.registerConnector(
      Connector.SOLUTION,
      new SolutionApiConnector(this.http, this.apiBaseUrl)
    );

    this.registerConnector(
      Connector.RATING,
      new RatingApiConnector(this.http, this.apiBaseUrl)
    );
  }

  /**
   * Registers a connector to the connector pool.
   * @param id: Connector - The unique identifier for a connector.
   * @param connector:AbstractApiConnector} - The connector to register.
   */
  private registerConnector(id: Connector, connector: AbstractApiConnector) {
    if (this.connectors.has(id)) {
      throw new Error('A connector with ID \'' + id + '\' has already been registered.');
    }
    try {
      this.connectors.set(id, connector);
    } catch (e) {
      throw new Error('Could not register connector: ' + e);
    }
  }

  /**
   * Gets a connector from the connector pool.
   * @param connector: Connector - The unique identifier for a connector.
   * @returns AbstractApiConnector | undefined - The connector itself
   */
  private getConnector(connector: Connector): AbstractApiConnector | undefined {
    if (!this.connectors.has(connector)) {
      throw new Error('No connector is registered for: ' + connector);
    }

    return this.connectors.get(connector);
  }

  // API connector getters
  public task(): TaskApiConnector {
    return this.getConnector(Connector.TASK) as TaskApiConnector;
  }

  public solution(): SolutionApiConnector {
    return this.getConnector(Connector.SOLUTION) as SolutionApiConnector;
  }

  public rating(): RatingApiConnector {
    return this.getConnector(Connector.RATING) as RatingApiConnector;
  }
}
