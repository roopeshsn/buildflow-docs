---
sidebar_position: 2
---

# Overview

**IO Connectors** provide effecient I/O between popular cloud services & storage systems.

With all I/O connectors you can either provide an already provisioned resource, or just give us a path to a resource that should be created. If the resource does not exist BuildFlow will create it for you and ensure you have the proper access.

## Streaming vs Batch Connectors

All connectors can work as **streaming** and **batch** output **_sinks_**.

The Processor's input **_source_** connector determines if the **_sink_** connector should run in streaming or batch mode.

For Example:

```python
@flow.processor(
    # PubSub is a streaming source
    source=PubSubSource(...),
    # The BigQuery Streaming API will be used in this case
    sink=BigQuerySink(...),
)
def process(payload: Any):
    return payload
```

```python
@flow.processor(
    # BigQuery is a batch source
    source=BigQuerySink(...),
    # The BigQuery LoadJobs API will be used in this case
    sink=BigQuerySource(...),
)
def process(payload: Any):
    return payload
```

## All Available Connectors

- [Google Cloud Pub/Sub - Streaming Source](./pubsub.md)
- [Google Cloud Storage Notifications - Streaming Source](./gcs_notifications.md)
- [BigQuery - Batch Source](./bigquery.md)