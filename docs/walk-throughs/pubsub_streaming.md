# Pub/Sub Streaming

In this walkthrough we will run a BuildFlow pipeline that reads from a Pub/Sub topic containing publically available taxi data and write the data to BigQuery. You can find all the code for this walk through [here](https://github.com/launchflow/buildflow/blob/main/buildflow/samples/pubsub_walkthrough.py)

## Getting Started

In order to follow this guide you must have a GCP project set up where a Pub/Sub subscription and BigQuery table can be created. You will also need to have the gcloud CLI installed to setup authentication / clean up resources when you are finished. Instructions for that can be found [here](https://cloud.google.com/sdk/docs/install). 

### Setting up your environment

To interact with GCP resources BuildFlow will use the application default
credentials on your machine. To set those up you can run:

```
gcloud auth application-default login
```

:::tip

If you happen to be following along from a VM running on GCP these may already
be setup for you.

:::

Install BuildFlow

```
pip install buildflow
```

## Run Pipeline

Below is a copy of the code. When running the pipeline the following resources will be created.

- Pub/Sub subscriber that subscribers to the taxi data Pub/Sub topic
- BigQuery dataset and BigQuery table where the data is written.


The pipeline does the following:
1. Listens to the public taxi ride Pub/Sub topic
2. Converts data into a Python dataclass
3. Writes output to BigQuery.

To run the pipeline:

:::note

You will need to set GCP_PROJECT to a GCP project you can create the resources in.
:::

```
python -m buildflow.sample.pubsub_streaming --gcp_project=$GCP_PROJECT
```

### Pipeline Code

```python
import argparse
import dataclasses
from datetime import datetime
import sys
from typing import Any, Dict

import buildflow
from buildflow import Flow

# Parser to allow run time configuration of arguments
parser = argparse.ArgumentParser()
parser.add_argument('--gcp_project', type=str, required=True)
args, _ = parser.parse_known_args(sys.argv)

# Set up a subscriber for the source.
# If this subscriber does not exist yet BuildFlow will create it.
input_sub = buildflow.PubSubSource(subscription=f'projects/{args.gcp_project}/subscriptions/taxiride-sub')
# Set up a BigQuery table for the sink.
# If this table does not exist yet BuildFlow will create it.
output_table = buildflow.BigQuerySink(table_id=f'{args.gcp_project}.buildflow_walkthrough.taxi_ride_data')

# Define an output type for our pipeline.
# By using a dataclass we can ensure our python type hints are validated
# against the BigQuery table's schema.
@dataclasses.dataclass
class TaxiOutput:
    ride_id: str
    point_idx: int
    latitude: float
    longitude: float
    timestamp: datetime
    meter_reading: float
    meter_increment: float
    ride_status: str
    passenger_count: int

flow = Flow()

# Define our processor.
@flow.processor(source=input_sub, sink=output_table)
def process(element: Dict[str, Any]) -> TaxiOutput:
    return element

# Run our flow.
flow.run()
```

## Cleaning Up

Make sure to clean up the resources you created to avoid extra GCP costs.

Delete the Pub/Sub subscription:

```
gcloud pubsub subscriptions delete projects/$GCP_PROJECT/subscriptions/taxirides-realtime
```

Delete the BigQuery table:

```
bq rm --project=$GCP_PROJECT buildflow_walkthrough.taxi_ride_data
```